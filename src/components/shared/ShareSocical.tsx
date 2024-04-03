import React from "react";
import Icon from "./Icon";
import Link from "next/link";

const ShareSocical = () => {
  return (
    <div className="flex items-center gap-3">
      <Link href={"#"} title="Facebook">
        <Icon name="Facebook" />
      </Link>
      <Link href={"#"} title="Twitter">
        <Icon name="Twitter" />
      </Link>
      <Link href={"#"} title="Instagram">
        <Icon name="Instagram" />
      </Link>
      <Link href={"#"} title="Youtube">
        <Icon name="Youtube" />
      </Link>
    </div>
  );
};

export default ShareSocical;
