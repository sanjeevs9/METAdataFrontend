export const FETCH_PAGES_QUERY = `
query MyQuery {
  fbpages {
    category
    id
    name
  }
}
`;

export const PAGE_QUERY = `
    query GetPageDetail($id: String!) {
      pagedetail(id: $id) {
        biography
        followers_count
        follows_count
        id
        media_count
        name
        profile_picture_url
        username
        media {
          caption
          comments_count
          id
          likes_count
          media_url
          reach_count
          saved_count
          shares_count
          media_type
        }
        stories {
          id
          comments_count
          impressions_count
          like_count
          media_url
          reach_count
          shares_count
        }
      }
    }
  `