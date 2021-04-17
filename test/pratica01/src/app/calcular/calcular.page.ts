import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.page.html',
  styleUrls: ['./calcular.page.scss'],
})
export class CalcularPage  {

  public resultado: String = "Resultado";
  public precoGasolina: string = "";
  public precoAlcool: string = "";

  calcular() {

    //validação de campos
    if (this.precoAlcool && this.precoGasolina) {
      //converter variaveis
      let pAlcool = parseFloat(this.precoAlcool)
      let pGasolina = parseFloat(this.precoGasolina)

      /*Lógica: se (precoAlcool/precoGasolina) >= 0.7 é melhor usar gasolina
      caso contrario é melhor usar alcool*/
      let res = pAlcool / pGasolina
      if(res>= 0.7){
        this.resultado = "Melhor usar ***Gasolina***"
      }else{
        this.resultado = "Melhor usar ***Alcool***"
      }



    } else {
      this.resultado = "algum campo não foi preenchido corretamente"
    }


  }

}
