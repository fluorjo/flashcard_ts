import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[]=[];

    getAll(): Movie[]{
        return this.movies;
    }

    getOne(id:string):Movie{
        const movie = this.movies.find(movie=>movie.id==parseInt(id));
        // string을 number로 바꿈.
        // parseInt(id) 를 +id 라고만 해도 됨. 
        if(!movie){
            throw new NotFoundException(`Movie with ID ${id} not found`);
    },
    return movie
    }

    deleteOne(id:string ):boolean{
        this.movies.filter(movie =>movie.id !== +id);
        return true; 
    }

    create(movieData){
        this.movies.push({
            id:this.movies.length+1,
            ...movieData,
        });
    }
}
