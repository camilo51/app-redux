import { connect } from "react-redux";
import styled from "styled-components";

const Carrito = ({carrito}) => {


  return (
    <div>
        <h3>Carrito de compras</h3>
        {
            carrito.length > 0 ?
                carrito.map((producto, i) => (
                    <Producto key={i}>
                        <NombreProducto>
                            {producto.nombre}
                        </NombreProducto>
                        Cantidad: {producto.cantidad}
                    </Producto>
                ))
            :
                <p>Aun no has agregado productos al carrifo</p>
        }
    </div>
  )
}

const Producto = styled.div`
    padding: 18px;
    border-bottom: 1px solid #ebebf3;
    font-size: 14px; 
`;

const NombreProducto = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`;

const mapStateToProps = (estado) => {
    return {
        carrito: estado.carrito
    }
}

export default connect(mapStateToProps)(Carrito);