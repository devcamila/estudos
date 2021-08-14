
describe("Classificacao indicativa", function() {
  beforeEach(function() {
    classificacao = new ClassificacaoIndicativa();
  });

  describe("Classificacao live", function() {
    it("tem que permitir todos", function() {
      expect(
        classificacao.valida_classificacao_indicativa(true, "05/04/1985", 100)
      ).toMatch(/true/);
    });
  });

 describe("Classificacao de 10 anos", function() {

    it("usuario tem a idade minima para 10 anos", function() {
      expect(
        classificacao.valida_classificacao_indicativa(true, "05/04/2008", 10)
      ).toMatch(/true/);
    });

    it("usuario não tem a idade minima para 10 anos", function() {
      expect(
        classificacao.valida_classificacao_indicativa(false, "05/04/2018", 10)
      ).toMatch(/false/);
    });
  });


  describe("Classificacao de 12 anos", function() {

    it("usuario tem a idade minima para 12 anos", function() {
      expect(
        classificacao.valida_classificacao_indicativa(true, "05/04/2006", 12)
      ).toMatch(/true/);
    });

    it("usuario não tem a idade minima para 12 anos", function() {
      expect(
        classificacao.valida_classificacao_indicativa(false, "05/04/2013", 12)
      ).toMatch(/false/);
    });
  });

  describe("Classificacao de 14 anos", function() {

    it("usuario tem a idade minima para 14 anos", function() {
      expect(
        classificacao.valida_classificacao_indicativa(true, "05/04/2004", 14)
      ).toMatch/(/true/);
    });

    it("usuario não tem a idade minima para 14 anos", function() {
      expect(
        classificacao.valida_classificacao_indicativa(false, "05/04/2013", 14)
      ).toMatch(/false/);
    });
  });

  describe("Classificacao de 16 anos", function() {

    it("usuario tem a idade minima para 16 anos", function() {
      expect(
        classificacao.valida_classificacao_indicativa(true, "05/04/2002", 16)
      ).toMatch(/true/);
    });

    it("usuario não tem a idade minima para 16 anos", function() {
      expect(
        classificacao.valida_classificacao_indicativa(false, "05/04/2013", 16)
      ).toMatch(/false/);
    });
  });

  describe("Classificacao de 18 anos", function() {

    it("usuario tem a idade minima para 18 anos", function() {
      expect(
        classificacao.valida_classificacao_indicativa(true, "05/04/2000", 18)
      ).toMatch(/true/);
    });

    it("usuario não tem a idade minima para 18 anos", function() {
      expect(
        classificacao.valida_classificacao_indicativa(false, "05/04/2013", 18)
      ).toMatch(/false/);
    });
  });
});

//código retirado desse site https://medium.com/xp-inc/javascript-testes-com-jasmine-7d0bc181bb4f