export class tvshowlist{
    page: number=0;
    results: Array<TvshowRes>=new Array<TvshowRes>;

    total_pages: number=0;
    total_results: number=0;
}

export class TvshowRes
{
    original_name:string='';
    original_language: string='';
    
}