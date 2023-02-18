import cn from 'classnames'
import Image from 'next/image'

type Props = {
  title: string
  src: string
}

const CoverImage = ({ title, src }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200': "",
      })}
      width={1300}
      height={630}
      style={{borderRadius: 8}}
      placeholder='blur'
    />
  )
  return (
    <div className="sm:mx-0">
      {image}
    </div>
  )
}

export default CoverImage
