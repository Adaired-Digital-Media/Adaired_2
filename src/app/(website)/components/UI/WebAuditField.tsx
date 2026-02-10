import React from 'react';
import SaveAndCancel from '../../common/SaveAndCancel';

const WebAuditField = ({ className }: any) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="url"
        placeholder="Website URL..."
        className="h-14 w-full rounded-full border-[1px] border-[#000000]/5 pl-5 pr-44 text-sm outline-none focus:border-[#FB9100]"
      />

      <SaveAndCancel
        isIcon={true}
        name="Get Start"
        className="absolute right-2 top-1 h-12 w-[25%] text-[16px]"
      />
    </div>
  );
};

export default WebAuditField;
