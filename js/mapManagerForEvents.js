/*#########################################################################*/
//SECTION DIBUJANDO SVG
/*#########################################################################*/
const MAPA = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1200">
    <g class="mapa">
      <path fill="#058fff" d="M297.68,1H1302.32C1466.72,1,1600,124.75,1600,277.41V919.47c0,152.66-133.28,276.41-297.68,276.41H297.68C133.28,1195.88,0,1072.13,0,919.47V277.41C0,124.75,133.28,1,297.68,1Z"/>
      <path fill="#1f660a" stroke-width="1.37px" d="M389.48,279.81h826.73c37.43,0,67.78,28.18,67.78,62.93V858c0,34.76-30.35,62.93-67.78,62.93H389.48c-37.43,0-67.77-28.17-67.77-62.93V342.74C321.71,308,352.05,279.81,389.48,279.81Z"/>
      <path fill="#1f660a" stroke-width="1.37px" stroke="#fff" d="M398.58,302.36h802.84c28.31,0,51.25,21.31,51.25,47.59V852.22c0,26.28-22.94,47.58-51.25,47.58H398.58c-28.31,0-51.25-21.3-51.25-47.58V350C347.33,323.67,370.27,302.36,398.58,302.36Z"/>
      <path fill="#fff" d="M186.78,326.15s11.61-156,190.34-185h424.3V130.53H380.07S194,145.07,172.24,326.15Z"/>
      <path fill="#fff" d="M1417.79,326.15s-6.64-148-183.53-185H810V130.53h421.36s180.78,14.54,202.56,195.62Z"/>
      <path fill="#fff" d="M1417.79,876s-6.64,148-183.53,185H810v10.57h421.36S1412.1,1057.09,1433.88,876Z"/>
      <path fill="#fff" d="M191,876s6.63,148,183.53,185h424.3v10.57H377.47S196.68,1057.09,174.89,876Z"/>
      <polygon fill="#fff" points="172.95 334.97 183.99 334.97 183.99 858.39 172.95 867.19 172.95 334.97"/>
      <polygon fill="#fff" points="1432.67 333.65 1420.68 333.65 1420.68 857.07 1432.67 865.87 1432.67 333.65"/>
      <path fill="#6faf31" stroke-width="6.2px" stroke="#fff" d="M396.26,328.1h799.88c19.16,0,34.69,14.42,34.69,32.21V835.87c0,17.79-15.53,32.21-34.69,32.21H396.26c-19.16,0-34.69-14.42-34.69-32.21V360.31C361.57,342.52,377.1,328.1,396.26,328.1Z"/>
      <ellipse fill="#6faf31" stroke-width="6.2px" stroke="#fff" cx="382.43" cy="344.84" rx="23.74" ry="15.27" transform="translate(-118.01 223.48) rotate(-28.41)"/>
      <ellipse fill="#6faf31" stroke-width="6.2px" stroke="#fff" cx="1207.67" cy="851.87" rx="23.83" ry="15.33" transform="translate(-260.22 680.3) rotate(-28.53)"/>
      <ellipse fill="#6faf31" stroke-width="6.2px" stroke="#fff" cx="1205.44" cy="346.73" rx="15.27" ry="23.74" transform="translate(326.95 1242.03) rotate(-61.59)"/>
      <ellipse fill="#6faf31" stroke-width="6.2px" stroke="#fff" cx="385.17" cy="847.33" rx="15.33" ry="23.83" transform="translate(-543.23 781) rotate(-61.47)"/>
      <ellipse fill="#6faf31" stroke-width="6.2px" stroke="#fff" cx="486.83" cy="580.4" rx="87.07" ry="86.58"/>
      <ellipse fill="#6faf31" stroke-width="6.2px" stroke="#fff" cx="1119.1" cy="589.73" rx="87.07" ry="86.58"/>
      <ellipse fill="#6faf31" stroke-width="6.2px" stroke="#fff" cx="797.25" cy="598.08" rx="87.07" ry="86.58"/>
      <line fill="none" stroke-width="6.2px" stroke="#fff" x1="796.2" y1="328.1" x2="800" y2="865.87"/>
      <rect fill="#6faf31" stroke-width="6.2px" stroke="#fff" x="365.84" y="407.25" width="157.69" height="346.3"/>
      <rect fill="#6faf31" stroke-width="6.2px" stroke="#fff" x="365.84" y="493.82" width="62.63" height="173.15"/>
      <rect fill="#6faf31" stroke-width="6.2px" stroke="#fff" x="1082.38" y="407.25" width="148.46" height="346.3"/>
      <rect fill="#6faf31" stroke-width="6.2px" stroke="#fff" x="1171.53" y="493.82" width="59.79" height="173.15"/>
    </g>
    <g id="zonas" class="mapa">ext install formulahendry.auto-close-tag
      <path fill="#220a66" d="M324.56,384.52V322.08a8.65,8.65,0,0,1,.68-3.35c3.09-7.39,17.08-35.69,50.56-34,27.74,1.43,89.68.76,121.88.27,5.5-.14,9.84-4.39,9.69-9.5a8.86,8.86,0,0,0-2.19-5.54L413,165.59a11.12,11.12,0,0,1-1.31-1.83c-1.94-3.22-11.46-14.74-46.57-8.44-39.95,7.08-162.69,55.25-165.83,187.29a9.23,9.23,0,0,0,6.05,8.68L310.68,393c5.06,2,10.91-.18,13.07-4.88A8.64,8.64,0,0,0,324.56,384.52Z"/>
      <path fill="#220a66" d="M1109.31,284.78H1242a10.28,10.28,0,0,1,3.44.59c7.36,2.64,35,14.05,36.66,40.39,1.19,19.06.88,42.45.5,57.24-.15,5,4.09,9.14,9.45,9.27a10.41,10.41,0,0,0,4.35-.83l104.33-44.73a9,9,0,0,0,5.7-8.5c-.66-17.18-5.83-67.52-42.37-109.51a7.05,7.05,0,0,1-.47-.61c-3.4-4.73-48-64.26-147.88-74.23a10.24,10.24,0,0,0-8.54,3.08L1102,269.83a8.59,8.59,0,0,0,1,12.74A10.15,10.15,0,0,0,1109.31,284.78Z"/>
      <path fill="#220a66" d="M323.13,815.29v62.44a9.08,9.08,0,0,0,.68,3.36c3.09,7.38,17.09,35.68,50.57,33.94,27.74-1.44,89.68-.77,121.88-.28,5.5.14,9.84,4.39,9.69,9.5a8.86,8.86,0,0,1-2.19,5.54l-92.19,104.5a13.41,13.41,0,0,0-1.31,1.81c-1.93,3.23-11.38,14.74-46.56,8.46C323.76,1037.4,201,989.25,197.92,857.19a9.26,9.26,0,0,1,6-8.69L309.3,806.82a10.25,10.25,0,0,1,13.05,4.93A8.69,8.69,0,0,1,323.13,815.29Z"/>
      <path fill="#220a66" d="M1107.9,915h132.67a10,10,0,0,0,3.44-.6c7.36-2.64,35-14,36.66-40.38,1.19-19.06.88-42.45.5-57.26-.14-5,4.1-9.12,9.47-9.25a10.4,10.4,0,0,1,4.34.84l104.31,44.71a9,9,0,0,1,5.69,8.51c-.65,17.19-5.82,67.51-42.36,109.51-.17.2-.33.4-.48.61-3.39,4.73-48,64.25-147.88,74.22a10.26,10.26,0,0,1-8.54-3.07L1100.53,930a8.59,8.59,0,0,1,1-12.75A10.19,10.19,0,0,1,1107.9,915Z"/>
      <path fill="#ea5101" d="M528.11,284.78H650.82c6.34,0,11.5-4.74,11.52-10.64a10.14,10.14,0,0,0-.79-3.9L616.37,160.78a11.49,11.49,0,0,0-10.73-6.85H440c-6.35,0-11.49,4.79-11.49,10.69A10.26,10.26,0,0,0,430.8,171L519,280.5A11.8,11.8,0,0,0,528.11,284.78Z"/>
      <path fill="#ea5101" d="M634.75,168.14l40.6,107.17a11.84,11.84,0,0,0,11,7.39l93.61,1.85c6.59.12,12-4.73,12.17-10.84l2.41-109c.13-6.12-5.1-11.17-11.68-11.3H646c-6.59,0-11.9,5-11.87,11.13A10.17,10.17,0,0,0,634.75,168.14Z"/>
      <path fill="#ea5101" d="M802.61,166.12V270.53c0,6.67,5.75,12.1,12.92,12.22l106,1.82A13.25,13.25,0,0,0,933.91,277l47.4-106.72c2.77-6.24-.42-13.39-7.15-16a14,14,0,0,0-5-.93l-153.38.44c-7.27,0-13.15,5.51-13.13,12.26Z"/>
      <path fill="#ea5101" d="M999.6,158.91l-52,113.26a8.84,8.84,0,0,0,5.18,11.89,10.26,10.26,0,0,0,3.76.72h118.15a10,10,0,0,0,7.6-3.39l97.78-113.27a8.63,8.63,0,0,0-1.53-12.74,10.23,10.23,0,0,0-6.08-2H1008.57A9.79,9.79,0,0,0,999.6,158.91Z"/>
      <path fill="#ea5101" d="M526.76,915H649.47c6.34,0,11.5,4.75,11.51,10.64a9.91,9.91,0,0,1-.78,3.9L615,1039a11.49,11.49,0,0,1-10.74,6.86H438.6c-6.35,0-11.49-4.79-11.49-10.69a10.23,10.23,0,0,1,2.29-6.37l88.15-109.51A11.84,11.84,0,0,1,526.76,915Z"/>
      <path fill="#ea5101" d="M633.34,1031.66l40.6-107.15a11.83,11.83,0,0,1,11-7.39l93.6-1.85c6.58-.13,12,4.71,12.17,10.82l2.41,109c.13,6.12-5.1,11.18-11.68,11.3H644.54c-6.59,0-11.91-5-11.88-11.12A10.52,10.52,0,0,1,633.34,1031.66Z"/>
      <path fill="#ea5101" d="M801.2,1033.7V929.28c0-6.67,5.75-12.1,12.92-12.22l106-1.83a13.23,13.23,0,0,1,12.41,7.56l47.4,106.73c2.78,6.23-.42,13.38-7.13,16a14.1,14.1,0,0,1-5.07.93L814.32,1046c-7.27,0-13.15-5.51-13.12-12.26Z"/>
      <path fill="#ea5101" d="M998.19,1040.9l-52-113.26c-2.11-4.6.19-9.92,5.14-11.88a10.33,10.33,0,0,1,3.85-.73h118.15a10,10,0,0,1,7.6,3.38l97.78,113.28a8.64,8.64,0,0,1-1.54,12.74,10.23,10.23,0,0,1-6.08,2h-164A9.79,9.79,0,0,1,998.19,1040.9Z"/>
      <path fill="#d40000" d="M1291.22,400.17l103-44.65c6.27-2.72,13.73-.21,16.66,5.61a10.92,10.92,0,0,1,1.18,5V511.49c0,5.71-4.45,10.57-10.52,11.49l-103,15.6c-6.82,1-13.26-3.27-14.38-9.61a10.19,10.19,0,0,1-.16-1.91V410.75A11.63,11.63,0,0,1,1291.22,400.17Z"/>
      <path fill="#d40000" d="M1294.9,657.48l99.19,12c6.87.83,13.16-3.67,14.05-10.05a8.93,8.93,0,0,0,.1-1.16l3.45-114.54c.21-6.42-5.23-11.79-12.14-12a14.28,14.28,0,0,0-2,.08l-102.64,12c-6.27.73-11,5.68-11,11.54v90.56C1284,651.77,1288.65,656.72,1294.9,657.48Z"/>
      <path fill="#d40000" d="M1298.32,664.26l98.8,13.35c6.17.83,10.74,5.73,10.74,11.52V833.71c0,6.43-5.66,11.63-12.59,11.61a13.51,13.51,0,0,1-5.11-1l-98.8-41.48a11.62,11.62,0,0,1-7.37-10.57V675.78c0-6.43,5.6-11.64,12.52-11.64A13.64,13.64,0,0,1,1298.32,664.26Z"/>
      <path fill="#d40000" d="M312.38,402l-103-44c-6.27-2.72-13.72-.21-16.66,5.6a11,11,0,0,0-1.18,4.79V511.53c0,5.66,4.5,10.45,10.52,11.32l103.06,15.34c6.78,1.07,13.21-3.17,14.36-9.47a11.23,11.23,0,0,0,.18-1.83V412.32A11.41,11.41,0,0,0,312.38,402Z"/>
      <path fill="#d40000" d="M308.71,655.27l-99.2,11.9c-6.82.87-13.1-3.56-14-9.89a10.92,10.92,0,0,1-.11-1.15l-3.46-112.77c-.13-6.39,5.34-11.66,12.22-11.78a13.09,13.09,0,0,1,1.88.1l102.64,11.81c6.23.68,10.93,5.55,11,11.37V644C319.52,649.76,314.87,654.57,308.71,655.27Z"/>
      <path fill="#d40000" d="M305.28,662l-98.8,13.11c-6.11.78-10.68,5.6-10.72,11.33V828.85c.08,6.42,5.74,11.56,12.65,11.48a13.13,13.13,0,0,0,5-1l98.81-40.83A11.45,11.45,0,0,0,319.62,788V673.33c-.07-6.39-5.7-11.53-12.59-11.47A12.76,12.76,0,0,0,305.28,662Z"/>
    </g>
  </svg>
`
const mapa = new MAP()

SVG.on( document , 'DOMContentLoaded' , () => {
  ( SVG.supported ) ? mapa.pasteMap( MAPA ) : Swal({
    type: 'error',
    title: 'Oops...',
    text: 'Su navegador no soporta SVG!'
  })
})
/*########################################################################*/

/*#########################################################################*/
//SECTION DESPLEGANDO TOOLTIPS
/*#########################################################################*/
$( document ).ready( e => {
  $('[data-toggle="tooltip"]').tooltip()
})
/*########################################################################*/

/*#########################################################################*/
//SECTION DESPLEGANDO SCROLLBAR
/*#########################################################################*/
$( document ).ready( e => {
  if ( navigator.userAgent.search('Chrome') > -1 ) {
    $(".panel").mCustomScrollbar({
      axis:'y',
      theme:'light-3',
      scrollbarPosition:'inside',
      scrollbarButtons:{
        enable:true
      },
      autoDraggerLength:true
    })
  }
})
/*########################################################################*/

/*#########################################################################*/
//SECTION ACCIONES SOBRE SILLAS Y MESAS
/*#########################################################################*/
$( document ).ready( e => {
  function action() {
    $( '#buttonsAction label' ).click( e => {
      $( '#buttonsAction label' ).off('click')

      const ID_CLICK = e.currentTarget.children[0].id

      if ( ID_CLICK === `${mapa.buttonsAction.estatus}1` || ID_CLICK === `${mapa.buttonsAction.estatus}2` ) {
        $( `#${mapa.buttonsAction.visibilidad}0` ).click()
        $( `#${mapa.buttonsAction.mover}0` ).click()
      } else if ( ID_CLICK === `${mapa.buttonsAction.visibilidad}1` || ID_CLICK === `${mapa.buttonsAction.visibilidad}2` ) {
        $( `#${mapa.buttonsAction.estatus}0` ).click()
        $( `#${mapa.buttonsAction.mover}0` ).click()
      } else if ( ID_CLICK === `${mapa.buttonsAction.mover}1` || ID_CLICK === `${mapa.buttonsAction.mover}2` ) {
        $( `#${mapa.buttonsAction.estatus}0` ).click()
        $( `#${mapa.buttonsAction.visibilidad}0` ).click()
      }

      action()
    })
  }

  action()
})
/*########################################################################*/

/*#########################################################################*/
//SECTION DESPLEGANDO EVENTO DE CLICK EN ZONAS
/*#########################################################################*/
SVG.on( document , 'DOMContentLoaded' , () => {
  SVG.get( `zonas` ).click( e => {
    if ( mapa.showZone( e.srcElement.id ) ) {
      const NAME_ZONE = SVG.get( `${mapa.zoneActive}` ).attr( 'name' )

      if ( NAME_ZONE != '' ) {
        $( `#${mapa.inputs.idNombreZona}` ).val( NAME_ZONE )
      } else {
        if ( mapa.nameValid( $( `#${mapa.inputs.idNombreZona}` ).val() ) ) {
          mapa.setNameZone()
        }
      }
    }
  })
})
/*########################################################################*/

/*#########################################################################*/
//SECTION DESPLEGANDO EVENTO DE CLICK EN BOTON CLOSE
/*#########################################################################*/
SVG.on( document , 'DOMContentLoaded' , () => {
  SVG.get( `${mapa.buttons[0].name}Bar` ).click( e => {
    mapa.showMap()

    if ( navigator.userAgent.search('Chrome') > -1 ) {
      $( `#map` ).mCustomScrollbar("destroy")
    }
  })
})
/*########################################################################*/

/*#########################################################################*/
//SECTION DESPLEGANDO EVENTO DE CLICK EN BOTON ZOOM OUT
/*#########################################################################*/
SVG.on( document , 'DOMContentLoaded' , () => {
  SVG.get( `${mapa.buttons[1].name}Bar` ).click( e => {
    mapa.zoomOut()
  })
})
/*########################################################################*/

/*#########################################################################*/
//SECTION DESPLEGANDO EVENTO DE CLICK EN BOTON ZOOM IN
/*#########################################################################*/
SVG.on( document , 'DOMContentLoaded' , () => {
  SVG.get( `${mapa.buttons[2].name}Bar` ).click( e => {
    mapa.zoomIn()
  })
})
/*########################################################################*/

/*#########################################################################*/
//SECTION DESPLEGANDO EVENTO DE CHANGE EN INPUT'S
/*#########################################################################*/
$( document ).ready( e => {
  //NOTE Valida nombre de zona
  $( '#nombreZona' ).change( ev => {
    ( mapa.nameValid( $( '#nombreZona' ).val() ) ) ? ( mapa.setNameZone() ) ? $( '#nombreZonaOut' ).addClass( 'd-none' ) : $( '#nombreZonaOut' ).html( 'No se pudo asignar nombre a zona actual' ).removeClass( 'd-none' ) : $( '#nombreZonaOut' ).html( 'El nombre tiene que comenzar con tres letras y despúes solo puede contener carácteres alfanuméricos' ).removeClass( 'd-none' )
  })

  //NOTE Valida numero de filas
  $( '#cantFilas' ).change( ev => {
    ( mapa.numberValid( $( '#cantFilas' ).val() ) ) ? $( '#cantFilasOut' ).addClass( 'd-none' ) : $( '#cantFilasOut' ).html( 'Ingrese un número de filas válido' ).removeClass( 'd-none' )
  })

  //NOTE Valida numero de columnas
  $( '#cantCol' ).change( ev => {
    ( mapa.numberValid( $( '#cantCol' ).val() ) ) ? $( '#cantColOut' ).addClass( 'd-none' ) : $( '#cantColOut' ).html( 'Ingrese un número de columnas válido' ).removeClass( 'd-none' )
  })

  //NOTE Valida numero de sillas por cada mesa
  $( '#cantChair' ).change( ev => {
    ( mapa.numberValid( $( '#cantChair' ).val() ) && parseInt( $( '#cantChair' ).val() ) >= 6 ) ? $( '#cantChairOut' ).addClass( 'd-none' ) : $( '#cantChairOut' ).html( 'Ingrese un número de sillas mayor o igual que seis' ).removeClass( 'd-none' )
  })

  //NOTE Valida numero de aforo
  $( '#aforo' ).change( ev => {
    ( mapa.numberValid( $( '#aforo' ).val() ) ) ? $( '#aforoOut' ).addClass( 'd-none' ) : $( '#aforoOut' ).html( 'Ingrese un número de aforo válido' ).removeClass( 'd-none' )
  })
})
/*########################################################################*/

/*#########################################################################*/
//SECTION DESPLEGANDO EVENTO DE CLICK EN BOTONES DE CONTROL DE GRAFICA
/*#########################################################################*/
$( document ).ready( e => {
  $( '#buttonsControl label' ).click( ev => {
    setTimeout( () => {
      const estado = mapa.buttonsControls( $( '#buttonsControl div.btn-group-toggle' ) )

      if ( estado ) {
        const TYPE_CHAIR = SVG.get( `${mapa.zoneActive}Group` ).attr('chair')

        if ( TYPE_CHAIR === 'seat' || TYPE_CHAIR === 'table' ) {
          SVG.select( `#${mapa.zoneActive}Group g[typeGroup='${TYPE_CHAIR}']` ).click( e => {
            mapa.eventAction = e
            mapa.buttonsActions()
          })
        }
      }
    },10)
  })
})
/*########################################################################*/