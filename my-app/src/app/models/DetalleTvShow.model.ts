export class Detalletvshowlist
    {
        page: number=0;
        results: Array<DetalleTvshowRes>=new Array<DetalleTvshowRes>;
        total_pages: number=0;
        total_results: number=0;
    }

export class DetalleTvshowRes
    {

        original_name:string='';
        original_language: string='';
        backdrop_path:string='';
        poster_path:string='';
        id:number=0;
        overview:string='';
        popularity:number=0;
        number_of_episodes:number=0;
    }