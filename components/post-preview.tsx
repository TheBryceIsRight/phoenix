import CoverImage from './cover-image'
import { Typography } from '@mui/material'
import Image from 'next/image'
import cn from 'classnames'

type Props = {
  title: string
  excerpt: string
  src: string
}

const PostPreview = ({
  title,
  excerpt,
  src
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <div className="sm:mx-0">
          <Image
            src={src}
            alt={`Cover Image for ${title}`}
            className={cn('shadow-sm w-full', {
              'hover:shadow-lg transition-shadow duration-200': "",
            })}
            width={1300}
            height={630}
            style={{ borderRadius: 8 }}
          />
        </div>
      </div>
      <Typography variant='h4'>
        {title}
      </Typography>
      <br />
      <Typography variant='body1'>{excerpt}</Typography>
    </div>
  )
}

export default PostPreview
