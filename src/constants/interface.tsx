export default interface Default {
  className?: string
  id?: string
  title?: string
}

export interface PostCard {
  status: string
  data: {
    createdDate: string
    updatedDate: string
    id: number
    title: string
    content: string
    thumbnailUrl: string
    categoryId: number
    author: {
      createdDate: string
      updatedDate: string
      email: string
      nickName: string
      authority: string
      imageUrl: string
      socialType: string
    }
    postNum: number
    viewCount: number
  }
  message: string
}

export const PostCardData: PostCard = {
  status: 'string',
  data: {
    createdDate: '2024-01-16T06:03:59.294Z',
    updatedDate: '2024-01-16T06:03:59.294Z',
    id: 0,
    title: 'string',
    content: 'string',
    thumbnailUrl:
      'https://github.blog/wp-content/uploads/2023/10/Collaboration-DarkMode-2.png?resize=1200%2C630',
    categoryId: 0,
    author: {
      createdDate: '2024-01-16T06:03:59.294Z',
      updatedDate: '2024-01-16T06:03:59.294Z',
      email: 'string',
      nickName: 'string',
      authority: 'MEMBER',
      imageUrl: 'string',
      socialType: 'GOOGLE',
    },
    postNum: 0,
    viewCount: 0,
  },
  message: 'string',
}
