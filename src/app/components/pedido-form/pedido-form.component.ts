import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido }  from '../../models/Pedido';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  pedido: Pedido = {
    id:'0',
    customerId: 0,
    customerName:'Pedro',
    lines: true,
    status:1,
    userId:1
  }
  constructor(private pedidoService: PedidosService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const params= this.activatedRoute.snapshot.params;
    this.pedidoService.getPedido(params.id)
    .subscribe(
      res =>{
        console.log(res);
        this.pedido=res;
      },
      err =>console.error(err)
    )
  }
  updatePedido(){
    this.pedido.status=2;
     this.pedidoService.updatePedido(this.pedido.id,this.pedido)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/pedidos']);
        },
        err=>console.error(err)
      )
  }

}
