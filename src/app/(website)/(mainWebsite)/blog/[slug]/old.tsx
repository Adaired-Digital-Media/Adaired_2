import React from 'react';
import MaxWidthWrapper from '@web-components/MaxWidthWrapper';
import parse, { Element, DOMNode } from 'html-react-parser';
import PageBanner from '@web-components/PageBanner';
import Heading from '@/app/(website)/common/Heading';
import { Base2URL } from '@/baseUrl';
import { blogData } from '@/dataa/blogData';
import arrowIcon from '../../../../../../public/assets/icons/arrowIcon.png';
import Image from 'next/image';

function getIntroParagraphs(html: string) {
  if (!html) return [];

  const firstH2Index = html.indexOf('<h2');
  const introHtml = firstH2Index !== -1 ? html.slice(0, firstH2Index) : html;

  return parse(introHtml, {
    replace(domNode) {
      if (domNode instanceof Element && domNode.name === 'p') {
        const text = domNode.children
          .map((c: any) => c.data || '')
          .join('')
          .trim();

        if (!text) return null;
        return <p className="leading-7">{text}</p>;
      }
    },
  });
}

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

const Blog = async ({ params }: BlogProps) => {
  const { data } = await getBlogs({ params });
  const blog = data[0];

  // ✅ total h2 count
  const h2Total = (blog?.postDescription?.match(/<h2>/g) || []).length;

  // ✅ trackers
  let currentH2Index = 0;
  let isLastH2Section = false;

  return (
    <>
      <PageBanner title={blogData.bannerTitle} />

      <MaxWidthWrapper className="py-12 md:py-20">
        <Heading
          isVarticle
          subTitle="BLOG"
          breakIndex={7}
          title="Your 2025 Local SEO Checklist: Let Your Business Outrank In The Local Market"
        />

        <div className="grid grid-cols-2 gap-[2rem]">
          <div className="relative">
            <Image
              src={blog?.featuredImage}
              width={500}
              height={500}
              alt="aim"
              className="object-contain"
            />
          </div>
          <div>
            <p>  {getIntroParagraphs(blog?.postDescription)}</p>
          </div>
        </div>
        <div className="prose w-full max-w-none columns-1">
          {parse(blog?.postDescription || '', {
            replace(domNode: DOMNode) {
              if (!(domNode instanceof Element)) return;

              const text = domNode.children
                .map((child: any) => child.data || '')
                .join('')
                .trim();

              if (!text) return null;

              switch (domNode.name) {
                case 'h2': {
                  currentH2Index++;
                  isLastH2Section = currentH2Index === h2Total;

                  return <h2 className="mt-8">{text}</h2>;
                }

                case 'h3': {
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
                }

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
