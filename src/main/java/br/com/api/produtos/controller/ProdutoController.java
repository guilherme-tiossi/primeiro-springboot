package br.com.api.produtos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import br.com.api.produtos.model.ProdutoModel;
import br.com.api.produtos.services.ProdutoService;

@RestController
@CrossOrigin(origins = "*")
public class ProdutoController {
    
    @Autowired
    private ProdutoService ps;

    @DeleteMapping("/deletar/{codigo}")
    public ResponseEntity<?> deletarProduto(@PathVariable long codigo){
        return ps.deletarProduto(codigo);
    }

    @PutMapping("/alterar")
    public ResponseEntity<?> alterarProduto(@RequestBody ProdutoModel pm){
        return ps.cadastrarAlterarProduto(pm, "alt");
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrarProduto(@RequestBody ProdutoModel pm){
        return ps.cadastrarAlterarProduto(pm, "cad");
    }
    
    @GetMapping("/listar")
    public Iterable<ProdutoModel> listar(){
        return ps.listarProdutos();
    }

    @GetMapping("/")
    public String rota(){
        return "API de produtos funcionando!";
    }
}
