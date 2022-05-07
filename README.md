
# Nombre de la aplicación

  

LiB-CLICK-FUNES.

Libreria Click

  

## Descripción

  

Aplicación para librería: venta de útiles escolares, papelería, elementos de artística y muchas cosas mas.

  
  

Permite navegar por las diferentes secciones y elegir los articulos deseados para la compra.

  

  

## Base de datos

  

  

Se utiliza Firebase. Para almacenar los productos y las ordenes, recuperar los mismos y su detalle se utiliza Firestore Database.

  

  

Se utiliza localStorage para mantener el carrito.

  

  

Posee control de stock, cuando se efectua una orden se descuenta el stock de los productos comprados.

  

  

## Autenticación

  

  

Para la autenticación se utiliza Auth de Firebase, el cual permite registrarse e iniciar sesión con mail y contraseña como asi también cerrar la misma. En cada sesión el usuario podrá ver sus órdenes generadas.

  

  

Las compras pueden realizarse sin estar logueado, en ese caso se le solicita mail, nro de telefono y Nombre y Apellido para asociarlo a la orden.

  

  

  

## Tecnología utilizada

  

  

Aplicación en React utilizando algunas dependencias de MUI (Mterial UI) como:

  

  

### AccountMenu (https://mui.com/material-ui/react-menu/)

se utilizó para el Menu de usuario (en NavBar), el cual utiliza los siguuientes componentes:

  

  

    ### Box (https://mui.com/material-ui/react-box/)

    ### Avatar (https://mui.com/material-ui/react-avatar/)

    ### Menu (https://mui.com/api/menu/#main-content)

    ### MenuItem (https://mui.com/api/menu-item/#main-content)

    ### ListItemIcon (https://mui.com/material-ui/api/list-item-icon/)

    ### Divider (https://mui.com/material-ui/react-divider/)

    ### IconButton (https://mui.com/material-ui/api/icon-button/)

    ### Typography (https://mui.com/material-ui/api/typography/)

    ### Tooltip (https://mui.com/material-ui/react-tooltip/)

    ### Logout

  

### MenuPopupState (https://mui.com/components/menus/)

Se utilizó para el Menu (NavBar), el cual utiliza los siguientes componentes:

  

    ### Button (https://mui.com/components/buttons/).

    ### Menu (https://mui.com/api/menu/#main-content).

    ### MenuItem (https://mui.com/api/menu-item/#main-content).

    ### IconButton (https://mui.com/api/icon-button/#main-content)

### PopupState (https://mui.com/material-ui/react-popover/#popupstate-helper)
se Utilizó para representar el carrito (lista de productos)

  

### AddShoppingCartIcon

Se ultilizó para el logo del carrito

  

### Collapsible table (https://mui.com/material-ui/react-table/#collapsible-table)

Se utilizó para mostrar las órdenes y sus productos

  
  

# Desarrollo

  

El proyecto completo se encuentra en https://github.com/funesnadia/lib-click-funes