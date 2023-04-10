import * as GETBooks from '../Requests/GETBooks.requests'

describe('GET Books', () => {
    it('Listar todos os livros', () =>{
        GETBooks.allBooks().should((Response) =>{
            expect(Response.status).to.eq(200)
            expect(Response.value).to.be.not.null;
        })
    });
});