export class MoviePlayingNow {
   
     page: number=0;
     results: MovieRes []=[];
     
    total_pages: number=0;
    total_results: number=0;
    
    }
    export class MovieRes
    {
      adult:boolean=false;
      backdrop_patch:string='';
      genere_ids: GenereID[]=[];
      id:number=0;
      original_language:string='';
      original_title:string='';
      overview: string='';
    popularity: number=0;
    poster_path: string='';
    release_date:string='';
    title:string='';
   
    }
    export class GenereID
    {
      id:number=0;
    }
 
