export interface BlogPost{
    id:string;
    category:string;
    title:string;
    excerpt:string;
    image:string;
    content:string;
}

export interface Review {
    id: number
    name: string
    location: string
    rating: number
    image: string
    content:string
  }