package br.com.api.produtos.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import br.com.api.produtos.model.ProdutoModel;
import br.com.api.produtos.model.RespostaModel;
import br.com.api.produtos.repository.ProdutoRepository;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository pr;

    @Autowired
    private RespostaModel rm;

    public Iterable<ProdutoModel> listarProdutos(){
        return pr.findAll();
    }

    public ResponseEntity<?> cadastrarAlterarProduto(ProdutoModel pm, String acao){
        if(pm.getNome().equals("") || pm.getPreco() < 0){
            rm.setMensagem("Ambos os campos de nome e de produto devem estar preenchidos");
            return new ResponseEntity<RespostaModel>(rm, HttpStatus.BAD_REQUEST);
        } else {
            if(acao.equals("cad")){
                return new ResponseEntity<ProdutoModel>(pr.save(pm), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<ProdutoModel>(pr.save(pm), HttpStatus.OK);
            }
        }
    }
}
