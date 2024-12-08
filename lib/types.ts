export type Media = {
    caption: string | null;
    comments_count: number;
    id: string;
    likes_count: number;
    media_url: string;
    reach_count: number;
    saved_count: number;
    shares_count: number;
    media_type: 'IMAGE' | 'VIDEO';
  };
  
export type Story = {
    comments_count: number;
    id: string;
    impressions_count: number;
    like_count: number;
    media_url: string;
    reach_count: number;
    shares_count: number;
  };
  
  export type PageDetail = {
    biography: string;
    follows_count: number;
    followers_count: number;
    name: string;
    media_count: number;
    id: string;
    profile_picture_url: string;
    username: string;
    stories: Story[];
    media: Media[];
  };

  export type FacebookPage = {
    category: string;
    id: string;
    name: string;
  };