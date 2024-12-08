import { FETCH_PAGES_QUERY } from "./query";
import type { PageDetail } from "./types";
import {PAGE_QUERY} from "./query";
import type { FacebookPage } from "./types";

// fetchPages.ts 
export async function fetchPages(setPages: (pages: FacebookPage[]) => void, setError: (error: string) => void, setLoading: (loading: boolean) => void): Promise<void> {
    try {
        
      const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: FETCH_PAGES_QUERY
        }),
      });
  
      const result = await response.json();
  
      if (result.errors) {
        throw new Error(result.errors[0].message);
      }
      console.log(result.data.fbpages);
      setPages(result.data.fbpages);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch pages');
    } finally {
      setLoading(false);
    }
  };

  // Mock data fetching function
export async function getPageDetail(id: string): Promise<PageDetail> {
    
    const response = await fetch (`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query:PAGE_QUERY,
        variables: { id },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch page details');
    }
  
    const { data } = await response.json();
    return data.pagedetail;
  }