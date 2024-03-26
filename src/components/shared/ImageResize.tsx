import Image from "next/image";

interface RemoteImage {
  src: string;
  width: number;
  height: number;
  className?: string;
  alt: string;
  priority?: boolean;
}

interface imageResponesive {
  src: string;
  className?: string;
  alt: string;
  priority?: boolean;
  size?: string;
}

interface backgroundImage {
  src: string;
  className?: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}

interface ImageResize {
  src: string | any;
  alt: string;
  heightSize?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}
export const RemoteImage = ({
  src,
  width,
  height,
  className,
  alt,
  priority,
}: RemoteImage) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={`h-auto object-cover ${className}`}
      width={width}
      height={height}
      priority={priority}
    />
  );
};

export const ImageResponsive = ({
  alt,
  src,
  className,
  priority,
  size,
}: imageResponesive) => {
  return (
    <Image
      alt={alt}
      src={src}
      sizes={size ? size : "100vw"}
      className={`h-auto object-cover ${className}`}
      priority={priority}
    />
  );
};

export const BackgroundImage = ({
  alt,
  src,
  className,
  priority,
  sizes,
}: backgroundImage) => {
  return (
    <Image
      alt={alt}
      src={src}
      fill
      sizes={sizes ? sizes : "100vw"}
      className={`object-cover ${className}`}
      priority={priority}
    />
  );
};

export const ImageResize = ({
  src,
  alt,
  heightSize,
  priority,
  className,
}: ImageResize) => {
  return (
    <div
      className={`${
        heightSize ? heightSize : "pt-[100%]"
      }  overflow-hidden relative `}
    >
      <Image
        src={src}
        alt={alt ? alt : "image-default"}
        fill
        priority={priority}
        className={`h-auto object-cover ${className}`}
        sizes="(min-width: 1200px) 100vw, (max-width: 1200px) 60vw, 40vw"
      />
    </div>
  );
};
