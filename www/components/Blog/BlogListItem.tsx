import { Badge, Space, Typography } from '@supabase/ui'
import authors from 'lib/authors.json'
import Link from 'next/link'
import React from 'react'
import { capitalize } from '~/lib/helpers'
import PostTypes from '~/types/post'

interface Props {
  blog: PostTypes
}

const BlogListItem = ({ blog }: Props) => {
  // @ts-ignore
  const author = blog.author ? authors[blog.author] : authors['supabase']

  console.log('blog', blog)
  return (
    <div key={blog.slug}>
      <a href={`/blog/${blog.url}`}>
        <div className="inline-block">
          <div className="flex flex-col space-y-3">
            <img
              src={
                !blog.thumb
                  ? `https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1`
                  : `/images/blog/${blog.thumb}`
              }
              style={{ minHeight: '220px', maxHeight: '220px', minWidth: '100%' }}
              className="w-full object-cover border dark:border-dark rounded-sm shadow-sm"
            />

            <div>
              <div className="space-x-3">
                <Typography.Text type="secondary">{blog.date}</Typography.Text>
                <Typography.Text type="secondary">•</Typography.Text>
                <Typography.Text type="secondary">{blog.readingTime}</Typography.Text>
              </div>
              <Typography.Title level={4} className="m-0">
                {blog.title}
              </Typography.Title>
            </div>

            {/* {author && (
              <div>
                <Space size={4}>
                  {author.author_image_url && (
                    <img src={author.author_image_url} className="rounded-full w-8" />
                  )}
                  <Space direction="vertical" size={0}>
                    <Typography.Text>{author.author}</Typography.Text>
                    <Typography.Text type="secondary" small>
                      {author.position}
                    </Typography.Text>
                  </Space>
                </Space>
              </div>
            )} */}
          </div>
          <div className="flex space-x-3">
            {blog.tags &&
              blog.tags.map((tag: string) => (
                <Link href={`/blog/tags/${tag}`} as={`/blog/tags/${tag}`}>
                  <div className="transition-opacity opacity-50 hover:opacity-100">
                    <Badge color="gray">{capitalize(tag.replace('-', ' '))}</Badge>
                  </div>
                </Link>
              ))}
          </div>

          <Typography.Text className="m-0" type="secondary">
            {blog.description}
          </Typography.Text>

          {/* <Typography>
                <ReactMarkdown>{blog.content.substring(0, 210) + '...'}</ReactMarkdown>
              </Typography>
              <Typography.Link>Read more</Typography.Link> */}
        </div>
      </a>
    </div>
  )
}

export default BlogListItem
