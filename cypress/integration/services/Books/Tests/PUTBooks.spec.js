import * as DELETEBooks from '../Requests/DELETEBooks.request'
import * as GETBooks from '../Requests/GETBooks.requests'
import * as POSTBooks from '../Requests/POSTBooks.request'
import * as PUTBooks from '../Requests/PUTBooks.request'

describe('PUT Books', () => {
    it('altera um livros', () =>{
        GETBooks.allBooks().then((resAllBooks) => {
            PUTBooks.changeBook(resAllBooks.body[0].id).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.be.eq('Livro Alterado');
            })
        })
    });
});

it('Cria e altera um livro', () =>{
    POSTBooks.addBooks().then((resAddBooks) =>{
        PUTBooks.changeBook(resAddBooks.body.id).should((resChangeBook) => {
            expect(resChangeBook.status).to.eq(200);
            expect(resChangeBook.body).to.be.not.null;
            expect(resChangeBook.body.title).to.be.eq('Livro Alterado');
        })
    });
});
