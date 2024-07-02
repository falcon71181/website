import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { postProcess, preProcess } from '@/lib/rehype-pre-raw';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrism from 'rehype-prism-plus';
import CopyButton from './copy_button';
import remarkGfm from 'remark-gfm';

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [preProcess, rehypePrism, postProcess],
  },
};

function Table({ data }: { data: any }) {
  let headers = data.headers.map((header: any, index: any) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row: any, index: any) => (
    <tr key={index}>
      {row.map((cell: any, cellIndex: any) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props: any) {
  let href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

const NextImage = ({ src, alt, ...otherProps }: {
  src?: string,
  alt?: string
}) => {
  return (
    <img
      src={src!}
      alt={alt!}
      className='my-10 rounded-lg object-cover'
      {...otherProps}
    />
  )
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props: any) {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

function CodeBlock({ children, ...props }: { children: any; title: string }) {
  return (
    <>
      <div className="rounded-t-md py-2 bg-neutral-800 dark:bg-black text-sm border-neutral-700 border-x-[1px] border-t-[1px] text-secondaryDarker flex flex-col">
        <div className="w-full flex justify-between border-b-[1px] border-neutral-800">
          <div className='text-white px-4'>{props.title}</div>

          <CopyButton text={children.props.raw} />
        </div>
        <div className='overflow-x-auto'>
          {children}
        </div>
      </div>
    </>
  );
}

let components = {
  Image: RoundedImage,
  a: CustomLink,
  img: NextImage,
  Callout,
  Table,
  CodeBlock,
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={options}
    />
  );
}
