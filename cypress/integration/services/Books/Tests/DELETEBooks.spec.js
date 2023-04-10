import * as DELETEBooks from '../Requests/DELETEBooks.request'
import * as GETBooks from '../Requests/GETBooks.requests'
import * as POSTBooks from '../Requests/POSTBooks.request'

describe('DELETE Books', () => {
    it('Deletar um livros', () =>{
        GETBooks.allBooks().then((resAllBooks) =>{
            DELETEBooks.deleteBooks(resAllBooks.body[0].id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200);
            })
        })
    });
});

it('Cria e exclui um livro', () =>{
    POSTBooks.addBooks().then((resAddBooks) =>{
        DELETEBooks.deleteBooks(resAddBooks.body.id).should((resDeleteBook) => {
            expect(resDeleteBook.status).to.eq(200);
        })
    });
});
