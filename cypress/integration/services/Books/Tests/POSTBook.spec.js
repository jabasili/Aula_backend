import * as POSTBooks from '../Requests/POSTBooks.request';

describe('POST Books', () => {
    it('Adicionar um novo livro', () =>{
        POSTBooks.addBooks().should((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body.title).to.eq("Livro");
        })
    });
});