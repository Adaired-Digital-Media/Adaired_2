import React from 'react';
import MaxWidthWrapper from '@web-components/MaxWidthWrapper';
import parse, { Element, DOMNode } from 'html-react-parser';
import PageBanner from '@web-components/PageBanner';
import Heading from '@/app/(website)/common/Heading';
import { Base2URL } from '@/baseUrl';
import { blogData } from '@/dataa/blogData';
import arrowIcon from '../../../../../../public/assets/icons/arrowIcon.png';
import Image from 'next/image';
import { transformDate } from '@/@core/hooks/transformDate';

/* ------------------ HELPERS ------------------ */

function splitHtmlAtFirstH2(html: string) {
  if (!html) return { introHtml: '', bodyHtml: '' };

  const firstH2Index = html.indexOf('<h2');
  if (firstH2Index === -1) {
    return { introHtml: html, bodyHtml: '' };
  }

  return {
    introHtml: html.slice(0, firstH2Index),
    bodyHtml: html.slice(firstH2Index),
  };
}

function splitIntroParagraphs(html: string, wordLimit = 120) {
  const paragraphs: string[] = [];

  parse(html, {
    replace(domNode) {
      if (domNode instanceof Element && domNode.name === 'p') {
        const text = domNode.children
          .map((c: any) => c.data || '')
          .join('')
          .trim();

        if (text) paragraphs.push(text);
      }
    },
  });

  let wordCount = 0;
  const top: string[] = [];
  const bottom: string[] = [];

  paragraphs.forEach((para) => {
    const words = para.split(' ');
    if (wordCount < wordLimit) {
      top.push(para);
      wordCount += words.length;
    } else {
      bottom.push(para);
    }
  });

  return { top, bottom };
}

/* ------------------ DATA ------------------ */

async function getBlogs({ params }: { params: { slug: string } }) {
  const res = await fetch(`${Base2URL}/blog/read?slug=${params.slug}`, {
    cache: 'no-store',
  });
  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch(`${Base2URL}/blog/read`, { cache: 'no-store' });
  const data = await res.json();

  return (data?.data ?? []).map((blog: any) => ({
    slug: String(blog.slug),
  }));
}

interface BlogProps {
  params: { slug: string };
}

/* ------------------ COMPONENT ------------------ */

const Blog = async ({ params }: BlogProps) => {
  const { data } = await getBlogs({ params });
  const blog = data[0];

  const { introHtml, bodyHtml } = splitHtmlAtFirstH2(blog?.postDescription);
  const { top, bottom } = splitIntroParagraphs(introHtml, 80);

  const h2Total = (bodyHtml.match(/<h2>/g) || []).length;
  let currentH2Index = 0;
  let isLastH2Section = false;
//test git config 12121
  return (
    <>
      <PageBanner title={blogData.bannerTitle} />

      <MaxWidthWrapper className="py-12 md:py-20">
        <Heading
          isVarticle
          subTitle="BLOG"
          breakIndex={4}
          title={blog?.postTitle}
        />

        {/* ----------- IMAGE + FIRST 120 WORDS1 ----------- */}
        <div className="mt-8 grid grid-cols-1 gap-[2rem] md:grid-cols-2">
          <div className="relative h-[50vh]">
            <Image
              src={blog?.featuredImage}
              alt="blog"
              fill
              className="rounded-[1rem] object-cover"
              priority
            />
          </div>
          <div>
            <div className="flex gap-2 py-4">
              <div className="h-6 w-1 bg-[#1B5A96]"></div>
              <p className="font-bold">
                Date:{' '}
                <span className="font-normal text-[#797979]">
                  {transformDate(blog?.createdAt)}
                </span>
              </p>
            </div>
            {top.map((para, i) => (
              <p key={i} className="mb-4 leading-7">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* ----------- REMAINING INTRO PARAGRAPHS ----------- */}
        {bottom.length > 0 && (
          <div className="mt-6">
            {bottom.map((para, i) => (
              <p key={i} className="mb-4 leading-7">
                {para}
              </p>
            ))}
          </div>
        )}

        {/* ----------- BLOG BODY (FROM FIRST H2) ----------- */}
        <div className="prose mt-10 w-full max-w-none">
          {parse(bodyHtml || '', {
            replace(domNode: DOMNode) {
              if (!(domNode instanceof Element)) return;

              const text = domNode.children
                .map((child: any) => child.data || '')
                .join('')
                .trim();

              if (!text) return null;

              switch (domNode.name) {
                case 'h2':
                  currentH2Index++;
                  isLastH2Section = currentH2Index === h2Total;
                  return <h2 className="mt-8">{text}</h2>;

                case 'h3':
                  return (
                    <div className="mt-6 flex items-start gap-2 font-medium">
                      {isLastH2Section && (
                        <Image
                          src={arrowIcon}
                          width={15}
                          height={20}
                          alt="icon"
                          className="my-auto"
                        />
                      )}
                      <h3 className="my-auto py-2">{text}</h3>
                    </div>
                  );

                case 'p':
                  return <p className="leading-7">{text}</p>;

                case 'li':
                  return <p className="pl-6">• {text}</p>;

                default:
                  return;
              }
            },
          })}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Blog;
