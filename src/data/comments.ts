export type CommentType = {
    username: string;
    userImagePath: string;
    commentText: string;
    likeNum: number;
    replies: CommentType[]
  }
  
  export const comments: CommentType[] = [
    {
      username: 'Lisa',
      userImagePath: '/profileImages/lisa.jpg',
      commentText: 'ชอบวงอะไร',
      likeNum: 999,
      replies: [
        {
          username: 'หมาน้อย',
          userImagePath: '/profileImages/puppy.jpg',
          commentText: '4eve and CGM48',
          likeNum: 0,
          replies: []
        },
        {
          username: 'แมวตัวหนึ่ง',
          userImagePath: '/profileImages/popcat.png',
          commentText: 'BNK48',
          likeNum: 2,
          replies: []
        }
      ]
    },
    {
      username: 'Charlie Brown',
      userImagePath: '/profileImages/charliebrown.jpg',
      commentText: 'บ้าไปแล้ว',
      likeNum: 207,
      replies: []
    }
  ]