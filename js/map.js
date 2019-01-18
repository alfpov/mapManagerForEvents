/*#########################################################################*/
//TODO  CLASE PADRE
/*#########################################################################*/
class MAP {
  constructor () {
    this.svgCode = null
    this.barCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 50"></svg>`
    this.alfabetico = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    this.status = {
      disponible:'#c6f68d',
      cortesia:'#16aef5',
      bloqueado:'#617c89',
      vendido:'#df0d0d'
    }
    this.buttons = [{
      name:'closeBtn',
      width:30,
      height:30,
      btnCode:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="#d75a4a" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>`
    },
    {
      name:'zoomPlusBtn',
      width:30,
      height:30,
      btnCode:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"/>
    </svg>`
    },
    {
      name:'zoomMinusBtn',
      width:30,
      height:30,
      btnCode:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M304 192v32c0 6.6-5.4 12-12 12H124c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"/>
      </svg>`
    }]
    this.buttonsControl = {
      distribucion:'distribucion',
      asiento:'asiento',
      forma:'forma',
      referencia:'referencia',
      indiceFila:'indiceFila',
      indiceCol:'indiceCol',
      indice:'indice',
      ordenFila:'ordenFila',
      ordenCol:'ordenCol',
      orden:'orden',
      direccion:'direccion',
      sentidoH:'sentidoH',
      sentidoV:'sentidoV',
      sentidoChair:'sentidoChair'
    }
    this.buttonsAction = {
      estatus:'estatus',
      visibilidad:'visibilidad',
      mover:'mover'
    }
    this.inputs = {
      idNombreZona:'nombreZona',
      idCantFilas:'cantFilas',
      idCantCol:'cantCol',
      idAforo:'aforo',
      idCantChair:'cantChair'
    }
    this.seats = {
      circle:{
        radius:20,
        cellX:50,
        cellY:50,
        size:16
      },
      rect:{
        width:40,
        height:40,
        cellX:50,
        cellY:50,
        size:16
      }
    }
    this.tables = {
      circle:{
        radiusIn:50,
        radiusOut:79.577471548,
        cellX:220,
        cellY:220,
        size:24
      },
      rect:{
        width:90,
        height:200,
        cellX:230,
        cellY:280,
        size:24
      }
    }
    this.idContainer = 'container'
    this.idMap = 'map'
    this.idBar = 'bar'
    this.idDrawMap = 'drawMap'
    this.idDrawBar = 'drawBar'
    this.idZonas = []
    this.idZona = 'zona'
    this.zoneActive = ''
    this.eventAction = ''
    this.nameZone = ''
    this.exRegNameValid = /^[a-zA-Z]{3,}[^\s\W_]*$/
    this.exRegNumberValid = /^\d+$/
  }

  /*#########################################################################*/
  //SECTION Dibuja el mapa
  //NOTE Pega mapa en el HTML
  pasteMap ( svgCode ) {
    try {
      this.svgCode = svgCode
      $( `#${this.idBar}` ).append( this.barCode )
      $( `#${this.idMap}` ).append( this.svgCode )
      return ( this.identifySvg() ) ? ( this.applyStyles() ) ? ( this.groupsPut() ) ? ( this.iconsPut() ) ? true : false : false : false : false
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica las etiquetas svg y cada una de sus zonas
  identifySvg () {
    try {
      $( `#${this.idBar} svg` )[0].id = this.idDrawBar
      $( `#${this.idDrawBar}` ).addClass( 'drawBar' ).addClass( 'd-none' )

      $( `#${this.idMap} svg` )[0].id = this.idDrawMap
      $( `#${this.idDrawMap}` ).addClass( 'drawMap' )

      const ZONAS = SVG.select( `#${this.idDrawMap} g#zonas` ).members[0].node.children
      let i = 1
      for (const zona of ZONAS) {
        zona.id = `${this.idZona}${i}`
        SVG.get( zona.id ).addClass( 'cursor' )
        this.idZonas[i-1] = zona.id
        i++
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Da estilos a dichas zonas y a la barra de iconos
  applyStyles () {
    try {
      $( `#${this.idDrawBar}` ).attr({
        width:$( `#${this.idMap}` )[0].clientWidth,
        height:'25px'
      })

      SVG.get( this.idDrawBar ).rect( 0 , 0 ).attr({
        x:0,
        y:0,
        width:1600,
        height:50,
        fill:'#fff',
        id:`${this.idDrawBar}Rect`
      })

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Crea los grupos y rect's donde se mostraran los puestos, además de crear los botones de la barra
  groupsPut () {
    try {
      this.idZonas.forEach( idZona => {
        SVG.get( this.idDrawMap).group().attr({
          id:`${idZona}Group`,
          opacity:0,
          name:'',
          status:'saved',//Tiene dos estados, saved: esta guardado , unsaved: cambios pendientes por guardar
          sold:'false',//Si hay algún puesto vendido o no
          distribution:'null',//El tipo de distribucion, null: no tiene , free: libre , numeric: numerada
          chair:'null'//El tipo de asiento, null: no tiene , seat: sillas , table: sillas con mesas
        })
        .addClass( 'zoneGroup' ).addClass( 'd-none' )

        SVG.get( `${idZona}Group` ).rect( 0 , 0 ).attr({
          id:`${idZona}Rect`,
          x:0,
          y:0,
          width:1600,
          height:1200,
          rx:10,
          ry:10
        })
      })

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Crea los iconos de la barra
  iconsPut () {
    try {
      this.buttons.forEach( btn => {
        SVG.get( this.idDrawBar ).group().attr({
          id:`${btn.name}Bar`,
          name:`${btn.name}`
        })
        .addClass( 'cursor' )

        SVG.get( `${btn.name}Bar` ).svg( btn.btnCode )
      })

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
  /*#########################################################################*/

  /*#########################################################################*/
  //SECTION Aplica interatividad al mapa
  //NOTE Muestra contenido de zona donde se hizo click
  showZone ( idZona ) {
    try {
      this.zoneActive = idZona

      SVG.select( `g.mapa` ).attr({
        opacity:0
      })
      .addClass( `d-none` )
      
      SVG.get( `${this.zoneActive}Group` ).attr({
        opacity:1
      })
      .removeClass( 'd-none' )

      $( `${this.idBar}` ).removeClass( 'd-none' )

      SVG.get( `${this.idDrawBar}` ).attr({
        opacity:1
      })
      .removeClass( 'd-none' )

      SVG.get( `${this.idDrawMap}` ).removeClass( 'drawMap' )

      SVG.get( `${this.zoneActive}Rect` ).attr({
        fill:SVG.get( this.zoneActive ).attr( 'fill' )
      })

      if ( navigator.userAgent.search('Chrome') > -1 ) {
        $( `#${this.idMap}` ).mCustomScrollbar({
          axis:'yx',
          theme:'light-3',
          scrollbarPosition:'inside',
          scrollbarButtons:{
            enable:true
          },
          autoDraggerLength:true
        })
      }

      if ( SVG.get( `${this.zoneActive}Group` ).attr( 'distribution' ) === 'null' || SVG.get( `${this.zoneActive}Group` ).attr( 'distribution' ) === 'free' ) {
        console.log('1')
        return ( this.drawMapAdapterIn( 0 ) ) ? ( this.drawBarAdapterIn() ) ? ( this.btnMove() ) ? true : false : false : false
      } else {
        console.log('2')
        return ( this.drawMapAdapterOut( this.zoneActive ) ) ? ( this.drawBarAdapterOut() ) ? ( this.btnMove() ) ? true : false : false : false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Adapta el mapa al tamaño de su contenedor
  drawMapAdapterIn ( offsetHeight ) {
    try {
      const WIDTH = $( `#${this.idMap}` )[0].clientWidth

      $( `#${this.idMap}` ).addClass( 'map' )

      const HEIGHT = $( `#${this.idMap}` )[0].clientHeight

      $( `#${this.idDrawMap}` ).removeClass( 'drawMap' )

      $( `#${this.idDrawMap}` ).attr({
        width:WIDTH,
        height:( HEIGHT - offsetHeight ),
        viewBox:`0 0 ${WIDTH} ${HEIGHT - offsetHeight}`
      })
      .css( 'background-color' , SVG.get( this.zoneActive ).attr( 'fill' ) )
      .addClass( 'rounded' )

      SVG.get( `${this.zoneActive}Rect` ).attr({
        width:WIDTH,
        height:( HEIGHT - offsetHeight )
      })
      
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Adapta la barra al tamaño de su contenedor
  drawBarAdapterIn (  ) {
    try {
      const WIDTH = SVG.get( `#${this.zoneActive}Rect` ).attr('width')
      
      SVG.get( `${this.idDrawBar}Rect` ).attr({
        width:WIDTH,
        height:30,
        x:0,
        y:0,
        rx:10,
        ry:10
      })

      $( `#${this.idDrawBar}` ).attr({
        width:WIDTH,
        height:30,
        viewBox:`0 0 ${WIDTH} 30`
      })

      $( `#${this.idBar}` ).removeClass( 'd-none' )

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Adapta el mapa al tamaño de su contenido
  drawMapAdapterOut ( idZona ) {
    try {
      const WIDTH = SVG.get( `${idZona}Rect` ).attr('width')
      const HEIGHT = SVG.get( `${idZona}Rect` ).attr('height')

      $( `#${this.idMap}` ).addClass( 'map' )
      $( `#${this.idDrawMap}` ).removeClass( 'drawMap' )

      $( `#${this.idDrawMap}` ).attr({
        viewBox:`0 0 ${WIDTH} ${HEIGHT}`
      })
      .css( 'background-color' , SVG.get( this.zoneActive ).attr( 'fill' ) )
      .addClass( 'rounded' )

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Adapta la barra al tamaño de su contenido
  drawBarAdapterOut () {
    try {
      const WIDTH = $( `#${this.idMap}` )[0].clientWidth

      SVG.get( `${this.idDrawBar}Rect` ).attr({
        width:WIDTH,
        height:30,
        x:0,
        y:0,
        rx:10,
        ry:10
      })

      $( `#${this.idDrawBar}` ).attr({
        width:WIDTH,
        height:30,
        viewBox:`0 0 ${WIDTH} 30`
      })

      $( `#${this.idBar}` ).removeClass( 'd-none' )

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Acomoda botones en la barra
  btnMove () {
    try {
      const WIDTH_BAR = $( `#${this.idBar}` )[0].clientWidth
      const HEIGHT_BAR = $( `#${this.idBar}` )[0].clientHeight
      let children

      this.buttons.forEach( ( btn , index ) => {
        children = SVG.select( `#${btn.name}Bar svg` )
        children.members[0].attr({
          x:( WIDTH_BAR-( ( ( 2*index )+1 )*btn.width ) ).toString(),
          width:( btn.width ).toString(),
          height:( btn.height ).toString()
        })
      })

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
  /*#########################################################################*/

  /*#########################################################################*/
  //SECTION Zoom sobre el mapa
  //NOTE Acerca el mapa
  zoomOut () {
    try {
      const WIDTH_RECT = parseFloat( SVG.get( `${this.zoneActive}Rect` ).attr('width') )
      const HEIGHT_RECT = parseFloat( SVG.get( `${this.zoneActive}Rect` ).attr('height') )
      const WIDTH_MAP = parseFloat( $( `#${this.idDrawMap}` )[0].attributes.width.value )
      const HEIGHT_MAP = parseFloat( $( `#${this.idDrawMap}` )[0].attributes.height.value )
      const WIDTH_WINDOW = $( `#${this.idMap}` )[0].clientWidth
      const HEIGHT_WINDOW = $( `#${this.idMap}` )[0].clientHeight
      const WIDTH_STEP = ( WIDTH_RECT-WIDTH_WINDOW )/10
      const HEIGHT_STEP = ( HEIGHT_RECT-HEIGHT_WINDOW )/10

      if ( ( WIDTH_MAP+WIDTH_STEP ) <= Math.ceil( WIDTH_RECT ) ) {
        $( `#${this.idDrawMap}` ).attr({
          width:( WIDTH_MAP+WIDTH_STEP ).toString()
        })
      }

      if ( ( HEIGHT_MAP+HEIGHT_STEP ) <= Math.ceil( HEIGHT_RECT ) ) {
        $( `#${this.idDrawMap}` ).attr({
          height:( HEIGHT_MAP+HEIGHT_STEP ).toString()
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Aleja el mapa
  zoomIn () {
    try {
      const WIDTH_RECT = parseFloat( SVG.get( `${this.zoneActive}Rect` ).attr('width') )
      const HEIGHT_RECT = parseFloat( SVG.get( `${this.zoneActive}Rect` ).attr('height') )
      const WIDTH_MAP = parseFloat( $( `#${this.idDrawMap}` )[0].attributes.width.value )
      const HEIGHT_MAP = parseFloat( $( `#${this.idDrawMap}` )[0].attributes.height.value )
      const WIDTH_WINDOW = $( `#${this.idMap}` )[0].clientWidth
      const HEIGHT_WINDOW = $( `#${this.idMap}` )[0].clientHeight
      const WIDTH_STEP = ( WIDTH_RECT-WIDTH_WINDOW )/10
      const HEIGHT_STEP = ( HEIGHT_RECT-HEIGHT_WINDOW )/10

      if ( ( WIDTH_MAP-WIDTH_STEP ) >= Math.ceil( WIDTH_WINDOW ) ) {
        $( `#${this.idDrawMap}` ).attr({
          width:( WIDTH_MAP-WIDTH_STEP ).toString()
        })
      }

      if ( ( HEIGHT_MAP-HEIGHT_STEP ) >= Math.ceil( HEIGHT_WINDOW ) ) {
        $( `#${this.idDrawMap}` ).attr({
          height:( HEIGHT_MAP-HEIGHT_STEP ).toString()
        })
      }

      if ( navigator.userAgent.search('Chrome') > -1 ) {
        $( `#${this.idMap}` ).mCustomScrollbar("destroy")

        $( `#${this.idMap}` ).mCustomScrollbar({
          axis:'yx',
          theme:'light-3',
          scrollbarPosition:'inside',
          scrollbarButtons:{
            enable:true
          },
          autoDraggerLength:true
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
  /*#########################################################################*/

  /*#########################################################################*/
  //SECTION Oculta zonas y muestra el mapa
  //NOTE Muestra el mapa
  showMap () {
    try {
      SVG.get( `${this.zoneActive}Group` ).opacity( '0' ).addClass( 'd-none' )

      $( `#${this.idBar}` ).addClass( 'd-none' )

      $( `#${this.idMap}` ).removeClass( 'map' )

      SVG.select( '.mapa' ).opacity( '1' ).removeClass( 'd-none' )

      $( `#${this.idDrawMap}` ).removeClass( 'rounded' ).addClass( 'drawMap' ).css( 'background-color' , 'transparent' ).attr({
        viewBox:'0 0 1600 1200',
        width:'',
        height:''
      })

      this.zoneActive = ''

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
  /*#########################################################################*/

  /*#########################################################################*/
  //SECTION Valida input's tipo text
  //NOTE Valida nombre de zona
  nameValid ( textInput ) {
    try {
      return this.exRegNameValid.test( textInput )
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Valida numero de fila y columna
  numberValid ( numberInput ) {
    try {
      return this.exRegNumberValid.test( numberInput )
    } catch (error) {
      console.log(error)
      return false
    }
  }
  /*#########################################################################*/

  /*#########################################################################*/
  //SECTION Habilita el control del mapa por medio de acciones viculadas a botones
  //NOTE Habilita acciones de control en botones para el mapa
  buttonsControls ( divs ) {
    try {
      if ( $( `#${this.buttonsControl.distribucion}1` )[0].checked ) {
        if ( !this.orderedDistribution( divs ) ) {
          return false
        } else {
          if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
            $( `#${this.buttonsControl.sentidoChair}` ).addClass( 'd-none' )
          } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
            $( `#${this.buttonsControl.sentidoChair}` ).removeClass( 'd-none' )
          }

          if ( $( `#${this.buttonsControl.referencia}1` )[0].checked ) {
            return ( this.columnRowReference( divs ) ) ? ( this.checkToolsToGraph() ) ? ( this.mapGraphing() ) ? true : false : false : false
          } else if ( $( `#${this.buttonsControl.referencia}2` )[0].checked ) {
            return ( this.linearReference( divs ) ) ? ( this.checkToolsToGraph() ) ? ( this.mapGraphing() ) ? true : false : false : false
          }
        }
      } else if ( $( `#${this.buttonsControl.distribucion}2` )[0].checked ) {
        return ( this.disorderlyDistribution( divs ) ) ? ( this.checkToolsToText() ) ? ( this.mapText() ) ? true : false : false : false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Muestra botones vinculados a la distribucion ordenada
  orderedDistribution ( divs ) {
    try {
      for (const DIV of divs) {
        switch (DIV.id) {
          case this.buttonsControl.asiento:
            $( `#${this.buttonsControl.asiento}` ).removeClass( 'd-none' )
            break;
          case this.buttonsControl.forma:
            $( `#${this.buttonsControl.forma}` ).removeClass( 'd-none' )
            break;
          case this.buttonsControl.referencia:
            $( `#${this.buttonsControl.referencia}` ).removeClass( 'd-none' )
            break;
          case this.buttonsControl.indiceFila:
            $( `#${this.buttonsControl.indiceFila}` ).removeClass( 'd-none' )
            break;
          case this.buttonsControl.indiceCol:
            $( `#${this.buttonsControl.indiceCol}` ).removeClass( 'd-none' )
            break;
          case this.buttonsControl.ordenFila:
            $( `#${this.buttonsControl.ordenFila}` ).removeClass( 'd-none' )
            break;
          case this.buttonsControl.ordenCol:
            $( `#${this.buttonsControl.ordenCol}` ).removeClass( 'd-none' )
            break;
          case this.buttonsControl.sentidoChair:
            $( `#${this.buttonsControl.sentidoChair}` ).removeClass( 'd-none' )
            break;
          case this.buttonsAction.estatus:
            $( `#${this.buttonsAction.estatus}` ).removeClass( 'd-none' )
            break;
          case this.buttonsAction.visibilidad:
            $( `#${this.buttonsAction.visibilidad}` ).removeClass( 'd-none' )
            break;
          case this.buttonsAction.mover:
            $( `#${this.buttonsAction.mover}` ).removeClass( 'd-none' )
            break;
          default:
            break;
        }
      }

      $( `#${this.buttonsAction.estatus}` ).removeClass( 'd-none' )
      $( `#${this.buttonsAction.visibilidad}` ).removeClass( 'd-none' )
      $( `#${this.buttonsAction.mover}` ).removeClass( 'd-none' )
      $( `#${this.inputs.idCantFilas}Parent` ).removeClass( 'd-none' )
      $( `#${this.inputs.idCantCol}Parent` ).removeClass( 'd-none' )
      $( `#${this.inputs.idCantChair}Parent` ).removeClass( 'd-none' )
      $( `#${this.inputs.idAforo}Parent` ).addClass( 'd-none' )

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Muestra botones vinculados a la distribucion libre
  disorderlyDistribution ( divs ) {
    try {
      for (const DIV of divs) {
        if ( DIV.id != this.buttonsControl.distribucion ) {
          $( `#${DIV.id}` ).addClass( 'd-none' )
        }
      }

      $( `#${this.buttonsAction.estatus}` ).addClass( 'd-none' )
      $( `#${this.buttonsAction.visibilidad}` ).addClass( 'd-none' )
      $( `#${this.buttonsAction.mover}` ).addClass( 'd-none' )
      $( `#${this.inputs.idCantFilas}Parent` ).addClass( 'd-none' )
      $( `#${this.inputs.idCantCol}Parent` ).addClass( 'd-none' )
      $( `#${this.inputs.idCantChair}Parent` ).addClass( 'd-none' )
      $( `#${this.inputs.idAforo}Parent` ).removeClass( 'd-none' )

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Muestra botones vinculados al tipo de referencia fila-columna
  columnRowReference ( divs ) {
    try {
      for (const DIV of divs) {
        switch (DIV.id) {
          case this.buttonsControl.indiceFila:
            $( `#${this.buttonsControl.indiceFila}` ).removeClass( 'd-none' )
            break;
          case this.buttonsControl.indiceCol:
            $( `#${this.buttonsControl.indiceCol}` ).removeClass( 'd-none' )
            break;
          case this.buttonsControl.indice:
            $( `#${this.buttonsControl.indice}` ).addClass( 'd-none' )
            break;
          case this.buttonsControl.ordenFila:
            $( `#${this.buttonsControl.ordenFila}` ).removeClass( 'd-none' )
            break;
          case this.buttonsControl.ordenCol:
            $( `#${this.buttonsControl.ordenCol}` ).removeClass( 'd-none' )
            break;
          case this.buttonsControl.orden:
            $( `#${this.buttonsControl.orden}` ).addClass( 'd-none' )
            break;
          case this.buttonsControl.direccion:
            $( `#${this.buttonsControl.direccion}` ).addClass( 'd-none' )
            break;
          case this.buttonsControl.sentidoH:
            $( `#${this.buttonsControl.sentidoH}` ).addClass( 'd-none' )
            break;
          case this.buttonsControl.sentidoV:
            $( `#${this.buttonsControl.sentidoV}` ).addClass( 'd-none' )
            break;
          default:
            break;
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Muestra botones vinculados al tipo de referencia lineal
  linearReference ( divs ) {
    try {
      for (const DIV of divs) {
        switch (DIV.id) {
          case this.buttonsControl.indiceFila:
            $( `#${this.buttonsControl.indiceFila}` ).addClass( 'd-none' )
            break;
          case this.buttonsControl.indiceCol:
            $( `#${this.buttonsControl.indiceCol}` ).addClass( 'd-none' )
            break;
          case this.buttonsControl.indice:
            $( `#${this.buttonsControl.indice}` ).removeClass( 'd-none' )
            break;
          case this.buttonsControl.ordenFila:
            $( `#${this.buttonsControl.ordenFila}` ).addClass( 'd-none' )
            break;
          case this.buttonsControl.ordenCol:
            $( `#${this.buttonsControl.ordenCol}` ).addClass( 'd-none' )
            break;
          case this.buttonsControl.orden:
            $( `#${this.buttonsControl.orden}` ).removeClass( 'd-none' )
            break;
          case this.buttonsControl.direccion:
            $( `#${this.buttonsControl.direccion}` ).removeClass( 'd-none' )
            break;
          case this.buttonsControl.sentidoH:
            $( `#${this.buttonsControl.sentidoH}` ).removeClass( 'd-none' )
            break;
          case this.buttonsControl.sentidoV:
            $( `#${this.buttonsControl.sentidoV}` ).removeClass( 'd-none' )
            break;
          default:
            break;
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Verifica que todo este bien para poder graficar los puestos en una determinada zona
  checkToolsToGraph () {
    try {
      return ( this.numberValid ( $( `#${this.inputs.idCantFilas}` ).val() ) ) ? ( this.numberValid ( $( `#${this.inputs.idCantCol}` ).val() ) ) ? ( this.zoneActive != '' ) ? true : false : false : false

    } catch (error) {
      console.log(error)
      return false
    }
  }

  checkToolsToText () {
    try {
      const a = ( this.numberValid ( $( `#${this.inputs.idAforo}` ).val() ) ) ? ( this.zoneActive != '' && SVG.get( `${this.zoneActive}Group` ).node.attributes.sold.value === 'false' ) ? true : Swal({
        type: 'error',
        title: 'Oops...',
        text: 'Zona ya esta vendida, no puede cambiar la distribución'
      }) : false;

      return ( a != true && a != false ) ? false : a

    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Grafica puestos en una determinada zona
  mapGraphing () {
    try {
      return ( this.checkAsiento() ) ? true : false
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Grafica mensaje de libre distribucion en una determinada zona
  mapText () {
    try {
      const ID_ZONA_GROUP = `${this.zoneActive}Group`;

      const a = ( this.eraseZone( ID_ZONA_GROUP ) ) ? ( this.groupsGraph( ID_ZONA_GROUP , 1 , 'text' ) ) ? ( this.textGraphFree ( ID_ZONA_GROUP , 'Zona de libre distribución' ) ) ? this.drawMapAdapterIn( 0 ) ? true : false : false : false : false

      if ( a ) {
        SVG.get( ID_ZONA_GROUP ).attr({
          status:'unsaved',//Tiene dos estados, saved: esta guardado , unsaved: cambios pendientes por guardar
          distribution:'free',//El tipo de distribucion, null: no tiene , free: libre , numeric: numerada
          chair:'null'//El tipo de asiento, null: no tiene , seat: sillas , table: sillas con mesas
        })
      }

      return a
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Limpia contenido de zona
  eraseZone ( idZona ) {
    try {
      const TEXTS = SVG.select( `#${idZona} g[typeGroup="text"]` )
      const SEATS = SVG.select( `#${idZona} g[typeGroup="seat"]` )
      const TABLES = SVG.select( `#${idZona} g[typeGroup="table"]` )

      TEXTS.members.forEach( TEXT => {
        TEXT.remove()
      })

      SEATS.members.forEach( SEAT => {
        SEAT.remove()
      })

      TABLES.members.forEach( TABLE => {
        TABLE.remove()
      })

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Grafica grupos "g"
  groupsGraph ( idZona , cantidad , tipo ) {
    try {
      for (let index = 1; index <= cantidad; index++) {
        SVG.get( idZona ).group().attr({
          id:`${idZona}${tipo}${index}`,
          typeGroup:tipo,
          offset:0
        })
        .addClass('cursor')
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Grafica textos "text"
  textGraphFree ( idZona , msn ) {
    try {
      SVG.get( `${idZona}text1` ).plain( msn ).attr({
        id:`${idZona}text1Plain`,
        x:( ( $( `#${this.idContainer}` )[0].clientWidth / 2 ) - 24 ).toString(),
        y:( ( $( `#${this.idContainer}` )[0].clientHeight / 2 ) - 24 ).toString()
      })
      .font({
        family:'Helvetica',
        size:24,
        anchor:'middle'
      })

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Chequea tipo de asiento
  checkAsiento () {
    try {
      return ( !$( `#${this.buttonsControl.asiento}1` )[0].checked ) ? ( !$( `#${this.buttonsControl.asiento}2` )[0].checked ) ? Swal({
        type: 'error',
        title: 'Oops...',
        text: 'Defina tipo de asiento'
      }) : this.checkForma( 'mesas' ) : this.checkForma( 'sillas' )
      
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Chequea forma de asiento
  checkForma ( asiento ) {
    try {
      return ( !$( `#${this.buttonsControl.forma}1` )[0].checked ) ? ( !$( `#${this.buttonsControl.forma}2` )[0].checked ) ? Swal({
        type: 'error',
        title: 'Oops...',
        text: 'Defina forma de asiento'
      }) : this.drawing( `${asiento}Cuadrada` ) : this.drawing( `${asiento}Circular` )

    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Manda a graficar los asientos segun su tipo y forma
  drawing ( draw ) {
    try {
      let a
      if ( draw === 'mesasCuadrada' ) {
        a = ( this.eraseZone ( `${this.zoneActive}Group` ) ) ? ( this.drawTableRect() ) ? this.paramSeats( 'Rect' ) : false : false;

        if ( a ) {
          SVG.get( `${this.zoneActive}Group` ).attr({
            distribution:'numeric',
            chair:'table',
            status:'unsaved'
          })
  
          return true
        } else {
          return false
        }
      } else if ( draw === 'mesasCircular' ) {
        a = ( this.eraseZone ( `${this.zoneActive}Group` ) ) ? ( this.drawTableCircle() ) ? this.paramSeats( 'Circle' ) : false : false;

        if ( a ) {
          SVG.get( `${this.zoneActive}Group` ).attr({
            distribution:'numeric',
            chair:'table',
            status:'unsaved'
          })
  
          return true
        } else {
          return false
        }
      } else if ( draw === 'sillasCuadrada' ) {
        a = ( this.eraseZone ( `${this.zoneActive}Group` ) ) ? ( this.drawSeatRect() ) ? this.paramSeats( 'Rect' ) : false : false;

        if ( a ) {
          SVG.get( `${this.zoneActive}Group` ).attr({
            distribution:'numeric',
            chair:'seat',
            status:'unsaved'
          })
  
          return true
        } else {
          return false
        }
      } else if ( draw === 'sillasCircular' ) {
        a = ( this.eraseZone ( `${this.zoneActive}Group` ) ) ? ( this.drawSeatCircle() ) ? this.paramSeats( 'Circle' ) : false : false;

        if ( a ) {
          SVG.get( `${this.zoneActive}Group` ).attr({
            distribution:'numeric',
            chair:'seat',
            status:'unsaved'
          })
  
          return true
        } else {
          return false
        }
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Inicializa valores para graficar las mesas segun los asientos de las mismas
  initChairRect () {
    try {
      const CANT_CHAIRS = $( `#${this.inputs.idCantChair}` ).val()

      if ( this.numberValid( CANT_CHAIRS ) ) {
        let lateral = ( parseInt( CANT_CHAIRS )-2 )/2

        if ( Number.isInteger( lateral ) ) {
          this.tables.rect.height = this.seats.rect.cellY*lateral
        } else {
          lateral = ( parseInt( CANT_CHAIRS )-1 )/2
          this.tables.rect.height = this.seats.rect.cellY*lateral
        }

        this.tables.rect.width = this.seats.rect.cellX*2
        this.tables.rect.cellY = this.tables.rect.height+this.seats.rect.cellY+30
        this.tables.rect.cellX = ( this.tables.rect.width*2 )+40

        return true
      } else {
        $( `${this.inputs.idCantChair}Out` ).html( 'Ingrese un número de sillas mayor o igual que seis' ).removeClass( 'd-none' )
        return false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Inicializa valores para graficar las mesas segun los asientos de las mismas
  initChairCircle () {
    try {
      const CANT_CHAIRS = $( `#${this.inputs.idCantChair}` ).val()
      const PI = Math.PI
      const L = parseInt( CANT_CHAIRS )*this.seats.circle.cellX
      const R = L/( 2*PI )
      const R_i = R-( ( 6*this.seats.circle.radius )/5 )

      if ( this.numberValid( CANT_CHAIRS ) ) {
        this.tables.circle.radiusOut = R
        this.tables.circle.radiusIn = R_i
        this.tables.circle.cellX = ( 2*R )+( 2*this.seats.circle.radius )+20
        this.tables.circle.cellY = ( 2*R )+( 2*this.seats.circle.radius )+20

        return true
      } else {
        $( `${this.inputs.idCantChair}Out` ).html( 'Ingrese un número de sillas mayor o igual que seis' ).removeClass( 'd-none' )
        return false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Manda a graficar mesas cuadradas
  drawTableRect () {
    try {
      const FILA = $( `#${this.inputs.idCantFilas}` ).val()
      const COLUMNA = $( `#${this.inputs.idCantCol}` ).val()
      const CANTIDAD = parseInt( FILA ) * parseInt( COLUMNA )

      const SENTIDO = ( $( `#${this.buttonsControl.sentidoChair}1` )[0].checked ) ? 'horario' : 'antihorario'

      if ( this.initChairRect() ) {
        const XY = ( this.groupsGraph( `${this.zoneActive}Group` , CANTIDAD , 'table' ) ) ? this.xyGraphInit( parseInt( FILA ) , parseInt( COLUMNA ) , this.tables.rect.cellX , this.tables.rect.cellY ) : false

        if ( XY === false ) {
          return false
        } else {
          return ( this.tablesRect( `${this.zoneActive}Group` , parseInt( FILA ) , parseInt( COLUMNA ) , XY.x , XY.y ) ) ? ( this.textGraphTablesRect( `${this.zoneActive}Group` ) ) ? ( this.textChairRect( `${this.zoneActive}Group` , SENTIDO ) ) ? ( this.rectAdapter( `${this.zoneActive}Group` , parseInt( FILA ) , parseInt( COLUMNA ) , this.tables.rect.cellX , this.tables.rect.cellY ) ) ? this.viewBoxAdapter( `${this.zoneActive}Group` ) : false : false : false : false
        }
      } else {
        return false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }
  
  //NOTE Manda a graficar mesas circulares
  drawTableCircle () {
    try {
      const FILA = $( `#${this.inputs.idCantFilas}` ).val()
      const COLUMNA = $( `#${this.inputs.idCantCol}` ).val()
      const CANTIDAD = parseInt( FILA ) * parseInt( COLUMNA )
      
      if ( this.initChairCircle() ) {
        const XY = ( this.groupsGraph( `${this.zoneActive}Group` , CANTIDAD , 'table' ) ) ? this.xyGraphInit( parseInt( FILA ) , parseInt( COLUMNA ) , this.tables.circle.cellX , this.tables.circle.cellY ) : false

        if ( XY === false ) {
          return false
        } else {
          return ( this.tablesCircle( `${this.zoneActive}Group` , parseInt( FILA ) , parseInt( COLUMNA ) , XY.x , XY.y ) ) ?  ( this.textGraphTablesCircle( `${this.zoneActive}Group` ) ) ? ( this.rectAdapter( `${this.zoneActive}Group` , parseInt( FILA ) , parseInt( COLUMNA ) , this.tables.circle.cellX , this.tables.circle.cellY ) ) ? this.viewBoxAdapter( `${this.zoneActive}Group` ) : false : false : false
        }
      } else {
        return false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Manda a graficar sillas cuadradas
  drawSeatRect () {
    try {
      const FILA = $( `#${this.inputs.idCantFilas}` ).val()
      const COLUMNA = $( `#${this.inputs.idCantCol}` ).val()
      const CANTIDAD = parseInt( FILA ) * parseInt( COLUMNA )

      const XY = ( this.groupsGraph( `${this.zoneActive}Group` , CANTIDAD , 'seat' ) ) ? this.xyGraphInit( parseInt( FILA ) , parseInt( COLUMNA ) , this.seats.rect.cellX , this.seats.rect.cellY ) : false

      if ( XY === false ) {
        return false
      } else {
        return ( this.seatsRect( `${this.zoneActive}Group` , parseInt( FILA ) , parseInt( COLUMNA ) , XY.x , XY.y ) ) ? ( this.textGraphRect( `${this.zoneActive}Group` ) ) ? ( this.rectAdapter( `${this.zoneActive}Group` , parseInt( FILA ) , parseInt( COLUMNA ) , this.seats.rect.cellX , this.seats.rect.cellY ) ) ? this.viewBoxAdapter( `${this.zoneActive}Group` ) : false : false : false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Manda a graficar sillas circulares
  drawSeatCircle () {
    try {
      const FILA = $( `#${this.inputs.idCantFilas}` ).val()
      const COLUMNA = $( `#${this.inputs.idCantCol}` ).val()
      const CANTIDAD = parseInt( FILA ) * parseInt( COLUMNA )
      
      const XY = ( this.groupsGraph( `${this.zoneActive}Group` , CANTIDAD , 'seat' ) ) ? this.xyGraphInit( parseInt( FILA ) , parseInt( COLUMNA ) , this.seats.circle.cellX , this.seats.circle.cellY ) : false

      if ( XY === false ) {
        return false
      } else {
        return ( this.seatsCircle( `${this.zoneActive}Group` , parseInt( FILA ) , parseInt( COLUMNA ) , XY.x , XY.y ) ) ? ( this.textGraphSeatsCircle( `${this.zoneActive}Group` ) ) ? ( this.rectAdapter( `${this.zoneActive}Group` , parseInt( FILA ) , parseInt( COLUMNA ) , this.seats.circle.cellX , this.seats.circle.cellY ) ) ? this.viewBoxAdapter( `${this.zoneActive}Group` ) : false : false : false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Indica las coordenadas x,y para iniciar la grafica
  xyGraphInit( fila , columna , cellX , cellY ) {
    try {
      const LENGTH_X = columna * cellX
      const LENGTH_Y = fila * cellY
      const WIDTH = $( `#${this.idMap}` )[0].clientWidth
      const HEIGHT = $( `#${this.idMap}` )[0].clientHeight

      if ( LENGTH_X <= WIDTH ) {
        if ( LENGTH_Y <= HEIGHT ) {
          return {
            x:( WIDTH - LENGTH_X ) / 2,
            y:( HEIGHT - LENGTH_Y ) / 2
          }
        } else {
          return {
            x:( WIDTH - LENGTH_X ) / 2,
            y:0
          }
        }
      } else {
        if ( LENGTH_Y <= HEIGHT ) {
          return {
            x:0,
            y:( HEIGHT - LENGTH_Y ) / 2
          }
        } else {
          return {
            x:0,
            y:0
          }
        }
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Grafica sillas circulares
  seatsCircle ( idZona , fila , columna , x , y ) {
    try {
      let row = 1
      let column = 1

      SVG.select( `#${idZona} g[typeGroup="seat"]` ).members.forEach( ( g , index ) => {
        g.attr({
          fila:row,
          columna:column,
          opacity:'1'
        })

        g.circle( this.seats.circle.radius ).attr({
          id:`${idZona}Circle${index+1}`,
          cx:( x + ( ( column - 1 ) * this.seats.circle.cellX ) + ( this.seats.circle.cellX / 2 ) ).toString(),
          cy:( y + ( ( row - 1 ) * this.seats.circle.cellY ) + ( this.seats.circle.cellY / 2 ) ).toString(),
          r:this.seats.circle.radius,
          fill:this.status.disponible
        })

        if ( column >= columna ) {
          row++
          column = 1
        } else {
          column++
        }
      })
      
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Grafica mesas circulares
  tablesCircle ( idZona , fila , columna , x , y ) {
    try {
      let row = 1
      let column = 1
      const CANT_CHAIRS = parseInt( $( `#${this.inputs.idCantChair}` ).val() )

      SVG.select( `#${idZona} g[typeGroup="table"]` ).members.forEach( ( g , index ) => {
        g.attr({
          fila:row,
          columna:column,
          opacity:'1'
        })

        g.circle( this.tables.circle.radiusIn ).attr({
          id:`${idZona}Circle${index+1}`,
          cx:( x + ( ( column - 1 ) * this.tables.circle.cellX ) + ( this.tables.circle.cellX/2 ) ).toString(),
          cy:( y + ( ( row - 1 ) * this.tables.circle.cellY ) + ( this.tables.circle.cellY/2 ) ).toString(),
          r:this.tables.circle.radiusIn,
          fill:'#fff'
        })

        if ( !this.tablesCircleSeats( g.attr('id') , CANT_CHAIRS ) ) {
          return false
        }

        if ( column >= columna ) {
          row++
          column = 1
        } else {
          column++
        }
      })
      
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Grafica sillas circulares de una mesa
  tablesCircleSeats( idGroup , cant ) {
    try {
      const CX_TABLE = parseFloat( SVG.get(`${idGroup}`).node.children[0].attributes.cx.value )
      const CY_TABLE = parseFloat( SVG.get(`${idGroup}`).node.children[0].attributes.cy.value )
      const H = this.tables.circle.radiusOut
      const PI = Math.PI
      const TITA_N = 2*PI/cant
      let cx
      let cy
      let co
      let ca

      for (let index = 0; index < cant; index++) {
        if ( ( index )*TITA_N >= 0 && ( index )*TITA_N < PI/2 ) {
          co = H*Math.sin( index*TITA_N )
          ca = H*Math.cos( index*TITA_N )
          cx = CX_TABLE + ca
          cy = CY_TABLE - co
        } else if ( ( index )*TITA_N >= PI/2 && ( index )*TITA_N < PI ) {
          co = H*Math.sin( PI-( index*TITA_N ) )
          ca = H*Math.cos( PI-( index*TITA_N ) )
          cx = CX_TABLE - ca
          cy = CY_TABLE - co
        } else if ( ( index*TITA_N ) >= PI && ( index*TITA_N ) < 3*PI/2 ) {
          co = H*Math.sin( ( index*TITA_N )-PI )
          ca = H*Math.cos( ( index*TITA_N )-PI )
          cx = CX_TABLE - ca
          cy = CY_TABLE + co
        } else if ( ( index*TITA_N ) >= 3*PI/2 && ( index*TITA_N ) < 2*PI ) {
          co = H*Math.sin( ( 2*PI )-( index*TITA_N ) )
          ca = H*Math.cos( ( 2*PI )-( index*TITA_N ) )
          cx = CX_TABLE + ca
          cy = CY_TABLE + co
        }

        SVG.get( idGroup ).circle( 10 ).attr({
          cx:( cx ).toString(),
          cy:( cy ).toString(),
          r:( this.seats.circle.radius ).toString(),
          fill:this.status.disponible,
          id:`${idGroup}Circle${index+1}`
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Grafica mesas rectangulares
  tablesRect ( idZona , fila , columna , x , y ) {
    try {
      let row = 1
      let column = 1
      const CANT_CHAIRS = parseInt( $( `#${this.inputs.idCantChair}` ).val() )

      SVG.select( `#${idZona} g[typeGroup="table"]` ).members.forEach( ( g , index ) => {
        g.attr({
          fila:row,
          columna:column,
          opacity:'1'
        })

        g.rect( 0 , 0 ).attr({
          id:`${idZona}Rect${index+1}`,
          x:( x + ( ( column - 1 ) * this.tables.rect.cellX ) + ( this.tables.rect.cellX/2 ) - ( this.tables.rect.width/2 ) - ( this.seats.rect.height/2 ) ).toString(),
          y:( y + ( ( row - 1 ) * this.tables.rect.cellY ) + ( this.tables.rect.cellY/2 ) - ( this.tables.rect.height/2 ) - ( this.seats.rect.height/2 ) ).toString(),
          width:this.tables.rect.width,
          height:this.tables.rect.height,
          fill:'#fff'
        })

        if ( !this.tablesRectSeats( g.attr('id') , CANT_CHAIRS ) ) {
          return false
        }

        if ( column >= columna ) {
          row++
          column = 1
        } else {
          column++
        }
      })
      
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Grafica sillas rectangulares de una mesa
  tablesRectSeats( idGroup , cant ) {
    try {
      const X_TABLE = parseFloat( SVG.get(`${idGroup}`).node.children[0].attributes.x.value )
      const Y_TABLE = parseFloat( SVG.get(`${idGroup}`).node.children[0].attributes.y.value )
      let x = 0
      let y = 0
      let lateral
      let cabecera

      if ( Number.isInteger( ( cant-2 )/2 ) ) {
        lateral = ( cant-2 )/2
        cabecera = 2
      } else {
        lateral = ( cant-1 )/2
        cabecera = 1
      }

      for (let index = 0; index < cant; index++) {
        if ( index < lateral ) {
          x = X_TABLE-this.seats.rect.width-( this.seats.rect.width/4 ),
          y = ( index*this.seats.rect.cellY )+Y_TABLE
        } else if ( index >= lateral && index < ( lateral+cabecera ) ) {
          if ( cabecera === 2 ) {
            x = X_TABLE+( ( index-lateral )*( this.tables.rect.width-this.seats.rect.width ) ),
            y = Y_TABLE+this.tables.rect.height+( this.seats.rect.height/4 )
          } else if ( cabecera === 1 ) {
            x = X_TABLE+( this.tables.rect.width/2 )-( this.seats.rect.width/2 ),
            y = Y_TABLE+this.tables.rect.height+( this.seats.rect.height/4 )
          }
        } else if ( index >= ( lateral+cabecera ) && index < cant ) {
          x = X_TABLE+this.tables.rect.width+( this.seats.rect.width/4 ),
          y = Y_TABLE+this.tables.rect.height-( ( index-lateral-cabecera+1 )*this.seats.rect.cellY )
        }

        SVG.get( idGroup ).rect( 0 , 0 , 0 , 0 ).attr({
          x:( x ).toString(),
          y:( y ).toString(),
          width:( this.seats.rect.width ).toString(),
          height:( this.seats.rect.height ).toString(),
          fill:this.status.disponible,
          id:`${idGroup}Rect${index+1}`
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Grafica sillas rectangulares
  seatsRect ( idZona , fila , columna , x , y ) {
    try {
      let row = 1
      let column = 1

      SVG.select( `#${idZona} g[typeGroup="seat"]` ).members.forEach( ( g , index ) => {
        g.attr({
          fila:row,
          columna:column,
          opacity:'1'
        })

        g.rect( 10 , 10 , 10 , 10 ).attr({
          id:`${idZona}Rect${index+1}`,
          x:( x + ( this.seats.rect.width/8 ) + ( ( column - 1 ) * this.seats.rect.cellX ) ).toString(),
          y:( y + ( this.seats.rect.height/8 ) + ( ( row - 1 ) * this.seats.rect.cellY ) ).toString(),
          width:this.seats.rect.width,
          height:this.seats.rect.height,
          fill:this.status.disponible
        })

        if ( column >= columna ) {
          row++
          column = 1
        } else {
          column++
        }
      })
      
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Dibuja el indice
  textGraphSeatsCircle ( idZona ) {
    try {
      let cx
      let cy

      SVG.select( `#${idZona} g[typeGroup="seat"]` ).members.forEach( ( seat , index ) => {
        cx = seat.node.children[0].attributes.cx.value
        cy = seat.node.children[0].attributes.cy.value

        SVG.get( seat.node.id ).plain( ( index + 1 ).toString() ).attr({
          id:`${idZona}text${index + 1}`,
          x:cx,
          y:( parseFloat( cy ) + ( this.seats.circle.size / 3 ) ).toString()
        })
        .font({
          family:'Helvetica',
          size:( this.seats.circle.size ).toString(),
          anchor:'middle'
        })
      })

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Dibuja el indice
  textGraphTablesCircle ( idZona ) {
    try {
      let cx
      let cy

      SVG.select( `#${idZona} g[typeGroup="table"]` ).members.forEach( ( table , index ) => {
        const LENGTH = table.node.children.length
        cx = table.node.children[0].attributes.cx.value
        cy = table.node.children[0].attributes.cy.value

        SVG.get( table.node.id ).plain( ( index + 1 ).toString() ).attr({
          id:`${idZona}text${index + 1}`,
          x:cx,
          y:( parseFloat( cy ) + ( this.tables.circle.size / 3 ) ).toString()
        })
        .font({
          family:'Helvetica',
          size:( this.tables.circle.size ).toString(),
          anchor:'middle'
        })

        for (let i = 1; i < LENGTH; i++) {
          cx = table.node.children[i].attributes.cx.value
          cy = table.node.children[i].attributes.cy.value

          SVG.get( table.node.id ).plain( ( i ).toString() ).attr({
            id:`${idZona}table${index+1}text${i}`,
            x:cx,
            y:( parseFloat( cy ) + ( this.seats.circle.size / 3 ) ).toString()
          })
          .font({
            family:'Helvetica',
            size:( this.seats.circle.size ).toString(),
            anchor:'middle'
          })
        }
      })

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Dibuja el indice
  textGraphTablesRect ( idZona ) {
    try {
      let x
      let y

      SVG.select( `#${idZona} g[typeGroup="table"]` ).members.forEach( ( table , index ) => {
        const LENGTH = table.node.children.length
        x = table.node.children[0].attributes.x.value
        y = table.node.children[0].attributes.y.value

        SVG.get( table.node.id ).plain( ( index + 1 ).toString() ).attr({
          id:`${idZona}text${index + 1}`,
          x:( parseFloat( x )+( this.tables.rect.width/2 ) ).toString(),
          y:( parseFloat( y )+( this.tables.rect.height/2 )+( this.tables.rect.size/3 ) ).toString()
        })
        .font({
          family:'Helvetica',
          size:( this.tables.rect.size ).toString(),
          anchor:'middle'
        })

        for (let i = 1; i < LENGTH; i++) {
          x = table.node.children[i].attributes.x.value
          y = table.node.children[i].attributes.y.value

          SVG.get( table.node.id ).plain( ( i ).toString() ).attr({
            id:`${idZona}table${index+1}text${i}`,
            x:( parseFloat( x )+( this.seats.rect.width/2 ) ).toString(),
            y:( parseFloat( y )+( this.seats.rect.height/2 )+( this.seats.rect.size/3 ) ).toString()
          })
          .font({
            family:'Helvetica',
            size:( this.seats.rect.size ).toString(),
            anchor:'middle'
          })
        }
      })

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Dibuja el indice de chairs
  textChairRect ( idZona , sentido ) {
    try {
      let length
      let cont

      SVG.select( `#${idZona} g[typeGroup="table"]` ).members.forEach( ( table , index ) => {
        length = table.node.children.length
        cont = 0

        if ( sentido === 'horario' ) {
          for (let index = length-1; index >= ( length/2 )+1; index--) {
            cont++
            table.node.children[index].nodeValue = cont
          }
        } else if ( sentido === 'antihorario' ) {
          for (let index = ( length/2 )+1; index < length; index++) {
            cont++
            table.node.children[index].nodeValue = cont
          }
        }
      })

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Dibuja el indice
  textGraphRect ( idZona ) {
    try {
      let x
      let y

      SVG.select( `#${idZona} g[typeGroup="seat"]` ).members.forEach( ( seat , index ) => {
        x = seat.node.children[0].attributes.x.value
        y = seat.node.children[0].attributes.y.value

        SVG.get( seat.node.id ).plain( ( index + 1 ).toString() ).attr({
          id:`${idZona}text${index + 1}`,
          x:( parseFloat( x ) + ( this.seats.rect.width/2 ) ).toString(),
          y:( parseFloat( y ) + ( this.seats.rect.height/2 ) + ( this.seats.rect.size/3 ) ).toString()
        })
        .font({
          family:'Helvetica',
          size:( this.seats.rect.size ).toString(),
          anchor:'middle'
        })
      })

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Adapta rect de fondo al tamaño del contenido
  rectAdapter ( idZona , fila , columna , cellX , cellY ) {
    try {
      const LENGTH_X = columna * cellX
      const LENGTH_Y = fila * cellY
      const CLIENT_WIDTH = $( `#${this.idMap}` )[0].clientWidth
      const CLIENT_HEIGHT = $( `#${this.idMap}` )[0].clientHeight

      if ( LENGTH_X <= CLIENT_WIDTH ) {
        if ( LENGTH_Y <= CLIENT_HEIGHT ) {
          SVG.get( idZona.replace( 'Group' , 'Rect' ) ).attr({
            width:CLIENT_WIDTH,
            height:CLIENT_HEIGHT
          })
        } else {
          SVG.get( idZona.replace( 'Group' , 'Rect' ) ).attr({
            width:CLIENT_WIDTH,
            height:LENGTH_Y
          })
        }
      } else {
        if ( LENGTH_Y <= CLIENT_HEIGHT ) {
          SVG.get( idZona.replace( 'Group' , 'Rect' ) ).attr({
            width:LENGTH_X,
            height:CLIENT_HEIGHT
          })
        } else {
          SVG.get( idZona.replace( 'Group' , 'Rect' ) ).attr({
            width:LENGTH_X,
            height:LENGTH_Y
          })
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return true
    }
  }

  //NOTE Adapta viewBox al tamaño del contenido
  viewBoxAdapter ( idZona ) {
    try {
      const LENGTH_X = SVG.get( idZona.replace( 'Group' , 'Rect' ) ).attr('width')
      const LENGTH_Y = SVG.get( idZona.replace( 'Group' , 'Rect' ) ).attr('height')

      $( `#${this.idDrawMap}` ).attr({
        viewBox:`0 0 ${LENGTH_X} ${LENGTH_Y}`
      })

      return true
    } catch (error) {
      console.log(error)
      return true
    }
  }

  //NOTE Adapta sillas segun parametros de los botones de comandos
  paramSeats ( forma ) {
    try {
      if( $( `#${this.buttonsControl.referencia}1` )[0].checked ) {
        if ( $( `#${this.buttonsControl.indiceFila}1` )[0].checked ) {
          if ( $( `#${this.buttonsControl.ordenFila}1` )[0].checked ) {
            if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
              this.seatsRowAlfabAscen( `${this.zoneActive}Group` , forma )

            } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
              this.tablesRowAlfabAscen( `${this.zoneActive}Group` , forma )

            }
          } else if ( $( `#${this.buttonsControl.ordenFila}2` )[0].checked ) {
            if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
              this.seatsRowAlfabDesce( `${this.zoneActive}Group` , forma )

            } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
              this.tablesRowAlfabDesce( `${this.zoneActive}Group` , forma )

            }
          }
        } else if ( $( `#${this.buttonsControl.indiceFila}2` )[0].checked ) {
          if ( $( `#${this.buttonsControl.ordenFila}1` )[0].checked ) {
            if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
              this.seatsRowNumerAscen( `${this.zoneActive}Group` , forma )

            } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
              this.tablesRowNumerAscen( `${this.zoneActive}Group` , forma )

            }
          } else if ( $( `#${this.buttonsControl.ordenFila}2` )[0].checked ) {
            if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
              this.seatsRowNumerDesce( `${this.zoneActive}Group` , forma )

            } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
              this.tablesRowNumerDesce( `${this.zoneActive}Group` , forma )

            }
          }
        }

        if ( $( `#${this.buttonsControl.indiceCol}1` )[0].checked ) {
          if ( $( `#${this.buttonsControl.ordenCol}1` )[0].checked ) {
            if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
              this.seatsColAlfabAscen( `${this.zoneActive}Group` , forma )

            } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
              this.tablesColAlfabAscen( `${this.zoneActive}Group` , forma )

            }
          } else if ( $( `#${this.buttonsControl.ordenCol}2` )[0].checked ) {
            if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
              this.seatsColAlfabDesce( `${this.zoneActive}Group` , forma )

            } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
              this.tablesColAlfabDesce( `${this.zoneActive}Group` , forma )

            }
          }
        } else if ( $( `#${this.buttonsControl.indiceCol}2` )[0].checked ) {
          if ( $( `#${this.buttonsControl.ordenCol}1` )[0].checked ) {
            if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
              this.seatsColNumerAscen( `${this.zoneActive}Group` , forma )

            } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
              this.tablesColNumerAscen( `${this.zoneActive}Group` , forma )

            }
          } else if ( $( `#${this.buttonsControl.ordenCol}2` )[0].checked ) {
            if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
              this.seatsColNumerDesce( `${this.zoneActive}Group` , forma )

            } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
              this.tablesColNumerDesce( `${this.zoneActive}Group` , forma )

            }
          }
        }
      } else if ( $( `#${this.buttonsControl.referencia}2` )[0].checked ) {
        if ( $( `#${this.buttonsControl.direccion}1` )[0].checked ) {
          if ( $( `#${this.buttonsControl.sentidoH}1` )[0].checked ) {
            if ( $( `#${this.buttonsControl.orden}1` )[0].checked ) {
              if ( $( `#${this.buttonsControl.indice}1` )[0].checked ) {
                if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
                  this.seatsHorizIzquiAscenAlfab( `${this.zoneActive}Group` )
    
                } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
                  this.tablesHorizIzquiAscenAlfab( `${this.zoneActive}Group` , forma )
    
                }
              } else if ( $( `#${this.buttonsControl.indice}2` )[0].checked ) {
                if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
                  this.seatsHorizIzquiAscenNumer( `${this.zoneActive}Group` , forma )
    
                } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
                  this.tablesHorizIzquiAscenNumer( `${this.zoneActive}Group` , forma )
    
                }
              }
            } else if ( $( `#${this.buttonsControl.orden}2` )[0].checked ) {
              if ( $( `#${this.buttonsControl.indice}1` )[0].checked ) {
                if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
                  this.seatsHorizIzquiDesceAlfab( `${this.zoneActive}Group` , forma )
    
                } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
                  this.tablesHorizIzquiDesceAlfab( `${this.zoneActive}Group` , forma )
    
                }
              } else if ( $( `#${this.buttonsControl.indice}2` )[0].checked ) {
                if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
                  this.seatsHorizIzquiDesceNumer( `${this.zoneActive}Group` , forma )
    
                } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
                  this.tablesHorizIzquiDesceNumer( `${this.zoneActive}Group` , forma )
    
                }
              }
            }
          } else if ( $( `#${this.buttonsControl.sentidoH}2` )[0].checked ) {
            if ( $( `#${this.buttonsControl.orden}1` )[0].checked ) {
              if ( $( `#${this.buttonsControl.indice}1` )[0].checked ) {
                if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
                  this.seatsHorizDerecAscenAlfab( `${this.zoneActive}Group` , forma )
    
                } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
                  this.tablesHorizDerecAscenAlfab( `${this.zoneActive}Group` , forma )
    
                }
              } else if ( $( `#${this.buttonsControl.indice}2` )[0].checked ) {
                if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
                  this.seatsHorizDerecAscenNumer( `${this.zoneActive}Group` , forma )
    
                } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
                  this.tablesHorizDerecAscenNumer( `${this.zoneActive}Group` , forma )
    
                }
              }
            } else if ( $( `#${this.buttonsControl.orden}2` )[0].checked ) {
              if ( $( `#${this.buttonsControl.indice}1` )[0].checked ) {
                if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
                  this.seatsHorizDerecDesceAlfab( `${this.zoneActive}Group` , forma )
    
                } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
                  this.tablesHorizDerecDesceAlfab( `${this.zoneActive}Group` , forma )
    
                }
              } else if ( $( `#${this.buttonsControl.indice}2` )[0].checked ) {
                if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
                  this.seatsHorizDerecDesceNumer( `${this.zoneActive}Group` , forma )
    
                } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
                  this.tablesHorizDerecDesceNumer( `${this.zoneActive}Group` , forma )
    
                }
              }
            }
          }
        } else if ( $( `#${this.buttonsControl.direccion}2` )[0].checked ) {
          if ( $( `#${this.buttonsControl.sentidoV}1` )[0].checked ) {
            if ( $( `#${this.buttonsControl.orden}1` )[0].checked ) {
              if ( $( `#${this.buttonsControl.indice}1` )[0].checked ) {
                if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
                  this.seatsVertiArribAscenAlfab( `${this.zoneActive}Group` , forma )
    
                } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
                  this.tablesVertiArribAscenAlfab( `${this.zoneActive}Group` , forma )
    
                }
              } else if ( $( `#${this.buttonsControl.indice}2` )[0].checked ) {
                if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
                  this.seatsVertiArribAscenNumer( `${this.zoneActive}Group` , forma )
    
                } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
                  this.tablesVertiArribAscenNumer( `${this.zoneActive}Group` , forma )
    
                }
              }
            } else if ( $( `#${this.buttonsControl.orden}2` )[0].checked ) {
              if ( $( `#${this.buttonsControl.indice}1` )[0].checked ) {
                if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
                  this.seatsVertiArribDesceAlfab( `${this.zoneActive}Group` , forma )
    
                } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
                  this.tablesVertiArribDesceAlfab( `${this.zoneActive}Group` , forma )
    
                }
              } else if ( $( `#${this.buttonsControl.indice}2` )[0].checked ) {
                if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
                  this.seatsVertiArribDesceNumer( `${this.zoneActive}Group` , forma )
    
                } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
                  this.tablesVertiArribDesceNumer( `${this.zoneActive}Group` , forma )
    
                }
              }
            }
          } else if ( $( `#${this.buttonsControl.sentidoV}2` )[0].checked ) {
            if ( $( `#${this.buttonsControl.orden}1` )[0].checked ) {
              if ( $( `#${this.buttonsControl.indice}1` )[0].checked ) {
                if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
                  this.seatsVertiAbajoAscenAlfab( `${this.zoneActive}Group` , forma )
    
                } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
                  this.tablesVertiAbajoAscenAlfab( `${this.zoneActive}Group` , forma )
    
                }
              } else if ( $( `#${this.buttonsControl.indice}2` )[0].checked ) {
                if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
                  this.seatsVertiAbajoAscenNumer( `${this.zoneActive}Group` , forma )
    
                } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
                  this.tablesVertiAbajoAscenNumer( `${this.zoneActive}Group` , forma )
    
                }
              }
            } else if ( $( `#${this.buttonsControl.orden}2` )[0].checked ) {
              if ( $( `#${this.buttonsControl.indice}1` )[0].checked ) {
                if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
                  this.seatsVertiAbajoDesceAlfab( `${this.zoneActive}Group` , forma )
    
                } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
                  this.tablesVertiAbajoDesceAlfab( `${this.zoneActive}Group` , forma )
    
                }
              } else if ( $( `#${this.buttonsControl.indice}2` )[0].checked ) {
                if ( $( `#${this.buttonsControl.asiento}1` )[0].checked ) {
                  this.seatsVertiAbajoDesceNumer( `${this.zoneActive}Group` , forma )
    
                } else if ( $( `#${this.buttonsControl.asiento}2` )[0].checked ) {
                  this.tablesVertiAbajoDesceNumer( `${this.zoneActive}Group` , forma )
    
                }
              }
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsRowAlfabAscen ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let letra

      for(let fila = 1 ; fila <= FILA ; fila++ ) {
        SVG.select( `#${idZona} g[fila="${fila}"]` ).members.forEach( item => {
          if ( item.node.attributes.opacity.value === '1' ) {
            letra = this.letter( fila-1 )
            item.node.id = `${idZona}seat-${letra}`
            item.node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`
            item.node.children[1].attributes.id.value = `${idZona}text-${letra}`
            item.node.children[1].textContent = `${letra}`
          } else {
            item.node.id = ''
            item.node.children[0].attributes.id.value = ''
            item.node.children[1].attributes.id.value = ''
            item.node.children[1].textContent = ''
          }
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsRowAlfabDesce ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let letra

      for(let fila = 1 ; fila <= FILA ; fila++ ) {
        SVG.select( `#${idZona} g[fila="${fila}"]` ).members.forEach( item => {
          if ( item.node.attributes.opacity.value === '1' ) {
            letra = this.letter( FILA-fila )
            item.node.id = `${idZona}seat-${letra}`
            item.node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`
            item.node.children[1].attributes.id.value = `${idZona}text-${letra}`
            item.node.children[1].textContent = `${letra}`
          } else {
            item.node.id = ''
            item.node.children[0].attributes.id.value = ''
            item.node.children[1].attributes.id.value = ''
            item.node.children[1].textContent = ''
          }
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsRowNumerAscen ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value

      for(let fila = 1 ; fila <= FILA ; fila++ ) {
        SVG.select( `#${idZona} g[fila="${fila}"]` ).members.forEach( item => {
          if ( item.node.attributes.opacity.value === '1' ) {
            item.node.id = `${idZona}seat-${fila}`
            item.node.children[0].attributes.id.value = `${idZona}${forma}-${fila}`
            item.node.children[1].attributes.id.value = `${idZona}text-${fila}`
            item.node.children[1].textContent = `${fila}`
          } else {
            item.node.id = ''
            item.node.children[0].attributes.id.value = ''
            item.node.children[1].attributes.id.value = ''
            item.node.children[1].textContent = ''
          }
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsRowNumerDesce ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value

      for(let fila = 1 ; fila <= FILA ; fila++ ) {
        SVG.select( `#${idZona} g[fila="${fila}"]` ).members.forEach( item => {
          if ( item.node.attributes.opacity.value === '1' ) {
            item.node.id = `${idZona}seat-${FILA-fila+1}`
            item.node.children[0].attributes.id.value = `${idZona}${forma}-${FILA-fila+1}`
            item.node.children[1].attributes.id.value = `${idZona}text-${FILA-fila+1}`
            item.node.children[1].textContent = `${FILA-fila+1}`
          } else {
            item.node.id = ''
            item.node.children[0].attributes.id.value = ''
            item.node.children[1].attributes.id.value = ''
            item.node.children[1].textContent = ''
          }
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsColAlfabAscen ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL= SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let letra

      for(let col = 1 ; col <= COL ; col++ ) {
        SVG.select( `#${idZona} g[columna="${col}"]` ).members.forEach( item => {
          if ( item.node.attributes.opacity.value === '1' ) {
            letra = this.letter( col-1 )
            item.node.id = `${item.node.id}-${letra}`
            item.node.children[0].attributes.id.value = `${item.node.children[0].attributes.id.value}-${letra}`
            item.node.children[1].attributes.id.value = `${item.node.children[1].attributes.id.value}-${letra}`
            item.node.children[1].textContent = `${item.node.children[1].textContent}-${letra}`
          } else {
            item.node.id = ''
            item.node.children[0].attributes.id.value = ''
            item.node.children[1].attributes.id.value = ''
            item.node.children[1].textContent = ''
          }
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsColAlfabDesce ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL= SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let letra

      for(let col = 1 ; col <= COL ; col++ ) {
        SVG.select( `#${idZona} g[columna="${col}"]` ).members.forEach( item => {
          if ( item.node.attributes.opacity.value === '1' ) {
            letra = this.letter( COL-col )
            item.node.id = `${item.node.id}-${letra}`
            item.node.children[0].attributes.id.value = `${item.node.children[0].attributes.id.value}-${letra}`
            item.node.children[1].attributes.id.value = `${item.node.children[1].attributes.id.value}-${letra}`
            item.node.children[1].textContent = `${item.node.children[1].textContent}-${letra}`
          } else {
            item.node.id = ''
            item.node.children[0].attributes.id.value = ''
            item.node.children[1].attributes.id.value = ''
            item.node.children[1].textContent = ''
          }
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsColNumerAscen ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL= SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value

      for(let col = 1 ; col <= COL ; col++ ) {
        SVG.select( `#${idZona} g[columna="${col}"]` ).members.forEach( item => {
          if ( item.node.attributes.opacity.value === '1' ) {
            item.node.id = `${item.node.id}-${col}`
            item.node.children[0].attributes.id.value = `${item.node.children[0].attributes.id.value}-${col}`
            item.node.children[1].attributes.id.value = `${item.node.children[1].attributes.id.value}-${col}`
            item.node.children[1].textContent = `${item.node.children[1].textContent}-${col}`
          } else {
            item.node.id = ''
            item.node.children[0].attributes.id.value = ''
            item.node.children[1].attributes.id.value = ''
            item.node.children[1].textContent = ''
          }
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsColNumerDesce ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL= SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value

      for(let col = 1 ; col <= COL ; col++ ) {
        SVG.select( `#${idZona} g[columna="${col}"]` ).members.forEach( item => {
          if ( item.node.attributes.opacity.value === '1' ) {
            item.node.id = `${item.node.id}-${COL-col+1}`
            item.node.children[0].attributes.id.value = `${item.node.children[0].attributes.id.value}-${COL-col+1}`
            item.node.children[1].attributes.id.value = `${item.node.children[1].attributes.id.value}-${COL-col+1}`
            item.node.children[1].textContent = `${item.node.children[1].textContent}-${COL-col+1}`
          } else {
            item.node.id = ''
            item.node.children[0].attributes.id.value = ''
            item.node.children[1].attributes.id.value = ''
            item.node.children[1].textContent = ''
          }
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsHorizIzquiAscenAlfab ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let letra
      let cont = 1

      for(let fila = 1; fila <= FILA; fila++) {
        const LENGTH_FILA = SVG.select( `#${idZona} g[fila="${fila}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[fila="${fila}"]` ).members
        for (let index = ( LENGTH_FILA-1 ); index >= 0; index--) {
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            letra = this.letter( cont-1 )
            ITEMS[index].node.id = `${idZona}seat-${letra}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`
            ITEMS[index].node.children[1].attributes.id.value = `${idZona}text-${letra}`
            ITEMS[index].node.children[1].textContent = `${letra}`
            cont++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''
            ITEMS[index].node.children[1].attributes.id.value = ''
            ITEMS[index].node.children[1].textContent = ''
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsHorizIzquiAscenNumer ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let cont = 1

      for(let fila = 1; fila <= FILA; fila++) {
        const LENGTH_FILA = SVG.select( `#${idZona} g[fila="${fila}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[fila="${fila}"]` ).members
        for (let index = ( LENGTH_FILA-1 ); index >= 0; index--) {
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            ITEMS[index].node.id = `${idZona}seat-${cont}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${cont}`
            ITEMS[index].node.children[1].attributes.id.value = `${idZona}text-${cont}`
            ITEMS[index].node.children[1].textContent = `${cont}`
            cont++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''
            ITEMS[index].node.children[1].attributes.id.value = ''
            ITEMS[index].node.children[1].textContent = ''
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsHorizIzquiDesceAlfab ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let letra
      let cont = 1

      for(let fila = FILA; fila >= 1; fila--) {
        const LENGTH_FILA = SVG.select( `#${idZona} g[fila="${fila}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[fila="${fila}"]` ).members
        for (let index = 0; index <= ( LENGTH_FILA-1 ); index++) {
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            letra = this.letter( cont-1 )
            ITEMS[index].node.id = `${idZona}seat-${letra}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`
            ITEMS[index].node.children[1].attributes.id.value = `${idZona}text-${letra}`
            ITEMS[index].node.children[1].textContent = `${letra}`
            cont++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''
            ITEMS[index].node.children[1].attributes.id.value = ''
            ITEMS[index].node.children[1].textContent = ''
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsHorizIzquiDesceNumer ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let cont = 1

      for(let fila = FILA; fila >= 1; fila--) {
        const LENGTH_FILA = SVG.select( `#${idZona} g[fila="${fila}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[fila="${fila}"]` ).members
        for (let index = 0; index <= ( LENGTH_FILA-1 ); index++) {
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            ITEMS[index].node.id = `${idZona}seat-${cont}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${cont}`
            ITEMS[index].node.children[1].attributes.id.value = `${idZona}text-${cont}`
            ITEMS[index].node.children[1].textContent = `${cont}`
            cont++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''
            ITEMS[index].node.children[1].attributes.id.value = ''
            ITEMS[index].node.children[1].textContent = ''
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsHorizDerecAscenAlfab ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let letra
      let cont = 1

      for(let fila = 1; fila <= FILA; fila++) {
        const LENGTH_FILA = SVG.select( `#${idZona} g[fila="${fila}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[fila="${fila}"]` ).members
        for (let index = 0; index <= ( LENGTH_FILA-1 ); index++) {
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            letra = this.letter( cont-1 )
            ITEMS[index].node.id = `${idZona}seat-${letra}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`
            ITEMS[index].node.children[1].attributes.id.value = `${idZona}text-${letra}`
            ITEMS[index].node.children[1].textContent = `${letra}`
            cont++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''
            ITEMS[index].node.children[1].attributes.id.value = ''
            ITEMS[index].node.children[1].textContent = ''
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsHorizDerecAscenNumer ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let cont = 1

      for(let fila = 1; fila <= FILA; fila++) {
        const LENGTH_FILA = SVG.select( `#${idZona} g[fila="${fila}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[fila="${fila}"]` ).members
        for (let index = 0; index <= ( LENGTH_FILA-1 ); index++) {
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            ITEMS[index].node.id = `${idZona}seat-${cont}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${cont}`
            ITEMS[index].node.children[1].attributes.id.value = `${idZona}text-${cont}`
            ITEMS[index].node.children[1].textContent = `${cont}`
            cont++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''
            ITEMS[index].node.children[1].attributes.id.value = ''
            ITEMS[index].node.children[1].textContent = ''
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsHorizDerecDesceAlfab ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let letra
      let cont = 1

      for(let fila = FILA; fila >= 1; fila--) {
        const LENGTH_FILA = SVG.select( `#${idZona} g[fila="${fila}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[fila="${fila}"]` ).members
        for (let index = ( LENGTH_FILA-1 ); index >= 0; index--) {
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            letra = this.letter( cont-1 )
            ITEMS[index].node.id = `${idZona}seat-${letra}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`
            ITEMS[index].node.children[1].attributes.id.value = `${idZona}text-${letra}`
            ITEMS[index].node.children[1].textContent = `${letra}`
            cont++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''
            ITEMS[index].node.children[1].attributes.id.value = ''
            ITEMS[index].node.children[1].textContent = ''
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsHorizDerecDesceNumer ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let cont = 1

      for(let fila = FILA; fila >= 1; fila--) {
        const LENGTH_FILA = SVG.select( `#${idZona} g[fila="${fila}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[fila="${fila}"]` ).members
        for (let index = ( LENGTH_FILA-1 ); index >= 0; index--) {
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            ITEMS[index].node.id = `${idZona}seat-${cont}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${cont}`
            ITEMS[index].node.children[1].attributes.id.value = `${idZona}text-${cont}`
            ITEMS[index].node.children[1].textContent = `${cont}`
            cont++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''
            ITEMS[index].node.children[1].attributes.id.value = ''
            ITEMS[index].node.children[1].textContent = ''
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsVertiArribAscenAlfab ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let letra
      let cont = 1

      for(let col = 1; col <= COL; col++) {
        const LENGTH_COL = SVG.select( `#${idZona} g[columna="${col}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[columna="${col}"]` ).members
        for (let index = ( LENGTH_COL-1 ); index >= 0; index--) {
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            letra = this.letter( cont-1 )
            ITEMS[index].node.id = `${idZona}seat-${letra}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`
            ITEMS[index].node.children[1].attributes.id.value = `${idZona}text-${letra}`
            ITEMS[index].node.children[1].textContent = `${letra}`
            cont++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''
            ITEMS[index].node.children[1].attributes.id.value = ''
            ITEMS[index].node.children[1].textContent = ''
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsVertiArribAscenNumer ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let cont = 1

      for(let col = 1; col <= COL; col++) {
        const LENGTH_COL = SVG.select( `#${idZona} g[columna="${col}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[columna="${col}"]` ).members
        for (let index = ( LENGTH_COL-1 ); index >= 0; index--) {
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            ITEMS[index].node.id = `${idZona}seat-${cont}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${cont}`
            ITEMS[index].node.children[1].attributes.id.value = `${idZona}text-${cont}`
            ITEMS[index].node.children[1].textContent = `${cont}`
            cont++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''
            ITEMS[index].node.children[1].attributes.id.value = ''
            ITEMS[index].node.children[1].textContent = ''
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsVertiArribDesceAlfab ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let letra
      let cont = 1

      for(let col = COL; col >= 1; col--) {
        const LENGTH_COL = SVG.select( `#${idZona} g[columna="${col}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[columna="${col}"]` ).members
        for (let index = 0; index <= ( LENGTH_COL-1 ); index++) {
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            letra = this.letter( cont-1 )
            ITEMS[index].node.id = `${idZona}seat-${letra}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`
            ITEMS[index].node.children[1].attributes.id.value = `${idZona}text-${letra}`
            ITEMS[index].node.children[1].textContent = `${letra}`
            cont++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''
            ITEMS[index].node.children[1].attributes.id.value = ''
            ITEMS[index].node.children[1].textContent = ''
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsVertiArribDesceNumer ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let cont = 1

      for(let col = COL; col >= 1; col--) {
        const LENGTH_COL = SVG.select( `#${idZona} g[columna="${col}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[columna="${col}"]` ).members
        for (let index = 0; index <= ( LENGTH_COL-1 ); index++) {
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            ITEMS[index].node.id = `${idZona}seat-${cont}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${cont}`
            ITEMS[index].node.children[1].attributes.id.value = `${idZona}text-${cont}`
            ITEMS[index].node.children[1].textContent = `${cont}`
            cont++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''
            ITEMS[index].node.children[1].attributes.id.value = ''
            ITEMS[index].node.children[1].textContent = ''
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsVertiAbajoAscenAlfab ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let letra
      let cont = 1

      for(let col = 1; col <= COL; col++) {
        const LENGTH_COL = SVG.select( `#${idZona} g[columna="${col}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[columna="${col}"]` ).members
        for (let index = 0; index <= ( LENGTH_COL-1 ); index++) {
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            letra = this.letter( cont-1 )
            ITEMS[index].node.id = `${idZona}seat-${letra}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`
            ITEMS[index].node.children[1].attributes.id.value = `${idZona}text-${letra}`
            ITEMS[index].node.children[1].textContent = `${letra}`
            cont++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''
            ITEMS[index].node.children[1].attributes.id.value = ''
            ITEMS[index].node.children[1].textContent = ''
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsVertiAbajoAscenNumer ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let cont = 1

      for(let col = 1; col <= COL; col++) {
        const LENGTH_COL = SVG.select( `#${idZona} g[columna="${col}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[columna="${col}"]` ).members
        for (let index = 0; index <= ( LENGTH_COL-1 ); index++) {
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            ITEMS[index].node.id = `${idZona}seat-${cont}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${cont}`
            ITEMS[index].node.children[1].attributes.id.value = `${idZona}text-${cont}`
            ITEMS[index].node.children[1].textContent = `${cont}`
            cont++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''
            ITEMS[index].node.children[1].attributes.id.value = ''
            ITEMS[index].node.children[1].textContent = ''
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsVertiAbajoDesceAlfab ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let letra
      let cont = 1

      for(let columna = COL; columna >= 1; columna--) {
        const LENGTH_COL = SVG.select( `#${idZona} g[columna="${columna}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[columna="${columna}"]` ).members
        for (let index = ( LENGTH_COL-1 ); index >= 0; index--) {
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            letra = this.letter( cont-1 )
            ITEMS[index].node.id = `${idZona}seat-${letra}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`
            ITEMS[index].node.children[1].attributes.id.value = `${idZona}text-${letra}`
            ITEMS[index].node.children[1].textContent = `${letra}`
            cont++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''
            ITEMS[index].node.children[1].attributes.id.value = ''
            ITEMS[index].node.children[1].textContent = ''
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  seatsVertiAbajoDesceNumer ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let cont = 1

      for(let col = COL; col >= 1; col--) {
        const LENGTH_COL = SVG.select( `#${idZona} g[columna="${col}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[columna="${col}"]` ).members
        for (let index = ( LENGTH_COL-1 ); index >= 0; index--) {
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            ITEMS[index].node.id = `${idZona}seat-${cont}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${cont}`
            ITEMS[index].node.children[1].attributes.id.value = `${idZona}text-${cont}`
            ITEMS[index].node.children[1].textContent = `${cont}`
            cont++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''
            ITEMS[index].node.children[1].attributes.id.value = ''
            ITEMS[index].node.children[1].textContent = ''
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesRowAlfabAscen ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let letra
      let cont

      for(let fila = 1 ; fila <= FILA ; fila++ ) {
        SVG.select( `#${idZona} g[fila="${fila}"]` ).members.forEach( item => {
          const LENGTH_CHILDREN = item.node.children.length
          if ( item.node.attributes.opacity.value === '1' ) {
            cont = 1
            letra = this.letter( fila-1 )
            item.node.id = `${idZona}table-${letra}`
            item.node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`

            for (let index = 1; index < (LENGTH_CHILDREN/2); index++) {
              item.node.children[index].attributes.id.value = `${idZona}Seat${index}${forma}-${letra}`
            }

            item.node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${letra}`
            item.node.children[(LENGTH_CHILDREN/2)].textContent = letra

            for (let index = ( (LENGTH_CHILDREN/2)+1 ); index < LENGTH_CHILDREN; index++) {
              item.node.children[index].attributes.id.value = `${idZona}Seat${cont}text-${letra}`
              item.node.children[index].textContent = cont
              cont++
            }
          } else {
            item.node.id = ''
            item.node.children[0].attributes.id.value = ''

            for (let index = 1; index < (LENGTH_CHILDREN/2); index++) {
              item.node.children[index].attributes.id.value = ''
            }

            for (let index = (LENGTH_CHILDREN/2); index < LENGTH_CHILDREN; index++) {
              item.node.children[index].attributes.id.value = ''
              item.node.children[index].textContent = ''
            }
          }
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesRowAlfabDesce ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let letra
      let cont

      for(let fila = 1 ; fila <= FILA ; fila++ ) {
        SVG.select( `#${idZona} g[fila="${fila}"]` ).members.forEach( item => {
          const LENGTH_CHILDREN = item.node.children.length
          if ( item.node.attributes.opacity.value === '1' ) {
            cont = 1
            letra = this.letter( FILA-fila )
            item.node.id = `${idZona}table-${letra}`
            item.node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`

            for (let index = 1; index < (LENGTH_CHILDREN/2); index++) {
              item.node.children[index].attributes.id.value = `${idZona}Seat${index}${forma}-${letra}`
            }

            item.node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${letra}`
            item.node.children[(LENGTH_CHILDREN/2)].textContent = letra

            for (let index = ( (LENGTH_CHILDREN/2)+1 ); index < LENGTH_CHILDREN; index++) {
              item.node.children[index].attributes.id.value = `${idZona}Seat${cont}text-${letra}`
              item.node.children[index].textContent = cont
              cont++
            }
          } else {
            item.node.id = ''
            item.node.children[0].attributes.id.value = ''

            for (let index = 1; index < (LENGTH_CHILDREN/2); index++) {
              item.node.children[index].attributes.id.value = ''
            }

            for (let index = (LENGTH_CHILDREN/2); index < LENGTH_CHILDREN; index++) {
              item.node.children[index].attributes.id.value = ''
              item.node.children[index].textContent = ''
            }
          }
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  tablesRowNumerAscen ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let cont

      for(let fila = 1 ; fila <= FILA ; fila++ ) {
        SVG.select( `#${idZona} g[fila="${fila}"]` ).members.forEach( item => {
          const LENGTH_CHILDREN = item.node.children.length
          if ( item.node.attributes.opacity.value === '1' ) {
            cont = 1
            item.node.id = `${idZona}table-${fila}`
            item.node.children[0].attributes.id.value = `${idZona}${forma}-${fila}`

            for (let index = 1; index < (LENGTH_CHILDREN/2); index++) {
              item.node.children[index].attributes.id.value = `${idZona}Seat${index}${forma}-${fila}`
            }

            item.node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${fila}`
            item.node.children[(LENGTH_CHILDREN/2)].textContent = fila

            for (let index = ( (LENGTH_CHILDREN/2)+1 ); index < LENGTH_CHILDREN; index++) {
              item.node.children[index].attributes.id.value = `${idZona}Seat${cont}text-${fila}`
              item.node.children[index].textContent = cont
              cont++
            }
          } else {
            item.node.id = ''
            item.node.children[0].attributes.id.value = ''

            for (let index = 1; index < (LENGTH_CHILDREN/2); index++) {
              item.node.children[index].attributes.id.value = ''
            }

            for (let index = (LENGTH_CHILDREN/2); index < LENGTH_CHILDREN; index++) {
              item.node.children[index].attributes.id.value = ''
              item.node.children[index].textContent = ''
            }
          }
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica seats segun parametros
  tablesRowNumerDesce ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let cont

      for(let fila = 1 ; fila <= FILA ; fila++ ) {
        SVG.select( `#${idZona} g[fila="${fila}"]` ).members.forEach( item => {
          const LENGTH_CHILDREN = item.node.children.length
          if ( item.node.attributes.opacity.value === '1' ) {
            cont = 1
            item.node.id = `${idZona}table-${FILA-fila+1}`
            item.node.children[0].attributes.id.value = `${idZona}${forma}-${FILA-fila+1}`

            for (let index = 1; index < (LENGTH_CHILDREN/2); index++) {
              item.node.children[index].attributes.id.value = `${idZona}Seat${index}${forma}-${FILA-fila+1}`
            }

            item.node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${FILA-fila+1}`
            item.node.children[(LENGTH_CHILDREN/2)].textContent = FILA-fila+1

            for (let index = ( (LENGTH_CHILDREN/2)+1 ); index < LENGTH_CHILDREN; index++) {
              item.node.children[index].attributes.id.value = `${idZona}Seat${cont}text-${FILA-fila+1}`
              item.node.children[index].textContent = cont
              cont++
            }
          } else {
            item.node.id = ''
            item.node.children[0].attributes.id.value = ''

            for (let index = 1; index < (LENGTH_CHILDREN/2); index++) {
              item.node.children[index].attributes.id.value = ''
            }

            for (let index = (LENGTH_CHILDREN/2); index < LENGTH_CHILDREN; index++) {
              item.node.children[index].attributes.id.value = ''
              item.node.children[index].textContent = ''
            }
          }
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesColAlfabAscen ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL= SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let letra
      let cont

      for(let col = 1 ; col <= COL ; col++ ) {
        SVG.select( `#${idZona} g[columna="${col}"]` ).members.forEach( item => {
          const LENGTH_CHILDREN = item.node.children.length
          if ( item.node.attributes.opacity.value === '1' ) {
            cont = 1
            letra = this.letter( col-1 )
            item.node.id = `${item.node.id}-${letra}`
            item.node.children[0].attributes.id.value = `${item.node.children[0].attributes.id.value}-${letra}`

            for (let index = 1; index < (LENGTH_CHILDREN/2); index++) {
              item.node.children[index].attributes.id.value = `${item.node.children[index].attributes.id.value}-${letra}`
            }

            item.node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${item.node.children[(LENGTH_CHILDREN/2)].attributes.id.value}-${letra}`
            item.node.children[(LENGTH_CHILDREN/2)].textContent = `${item.node.children[(LENGTH_CHILDREN/2)].textContent}-${letra}`

            for (let index = ( (LENGTH_CHILDREN/2)+1 ); index < LENGTH_CHILDREN; index++) {
              item.node.children[index].attributes.id.value = `${item.node.children[index].attributes.id.value}-${letra}`
              item.node.children[index].textContent = cont
              cont++
            }
          } else {
            item.node.id = ''
            item.node.children[0].attributes.id.value = ''

            for (let index = 1; index < (LENGTH_CHILDREN/2); index++) {
              item.node.children[index].attributes.id.value = ''
            }

            for (let index = (LENGTH_CHILDREN/2); index < LENGTH_CHILDREN; index++) {
              item.node.children[index].attributes.id.value = ''
              item.node.children[index].textContent = ''
            }
          }
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesColAlfabDesce ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL= SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let letra
      let cont

      for(let col = 1 ; col <= COL ; col++ ) {
        SVG.select( `#${idZona} g[columna="${col}"]` ).members.forEach( item => {
          const LENGTH_CHILDREN = item.node.children.length
          if ( item.node.attributes.opacity.value === '1' ) {
            cont = 1
            letra = this.letter( COL-col )
            item.node.id = `${item.node.id}-${letra}`
            item.node.children[0].attributes.id.value = `${item.node.children[0].attributes.id.value}-${letra}`

            for (let index = 1; index < (LENGTH_CHILDREN/2); index++) {
              item.node.children[index].attributes.id.value = `${item.node.children[index].attributes.id.value}-${letra}`
            }

            item.node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${item.node.children[(LENGTH_CHILDREN/2)].attributes.id.value}-${letra}`
            item.node.children[(LENGTH_CHILDREN/2)].textContent = `${item.node.children[(LENGTH_CHILDREN/2)].textContent}-${letra}`

            for (let index = ( (LENGTH_CHILDREN/2)+1 ); index < LENGTH_CHILDREN; index++) {
              item.node.children[index].attributes.id.value = `${item.node.children[index].attributes.id.value}-${letra}`
              item.node.children[index].textContent = cont
              cont++
            }
          } else {
            item.node.id = ''
            item.node.children[0].attributes.id.value = ''

            for (let index = 1; index < (LENGTH_CHILDREN/2); index++) {
              item.node.children[index].attributes.id.value = ''
            }

            for (let index = (LENGTH_CHILDREN/2); index < LENGTH_CHILDREN; index++) {
              item.node.children[index].attributes.id.value = ''
              item.node.children[index].textContent = ''
            }
          }
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesColNumerAscen ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL= SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let cont

      for(let col = 1 ; col <= COL ; col++ ) {
        SVG.select( `#${idZona} g[columna="${col}"]` ).members.forEach( item => {
          const LENGTH_CHILDREN = item.node.children.length
          if ( item.node.attributes.opacity.value === '1' ) {
            cont = 1
            item.node.id = `${item.node.id}-${col}`
            item.node.children[0].attributes.id.value = `${item.node.children[0].attributes.id.value}-${col}`

            for (let index = 1; index < (LENGTH_CHILDREN/2); index++) {
              item.node.children[index].attributes.id.value = `${item.node.children[index].attributes.id.value}-${col}`
            }

            item.node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${item.node.children[(LENGTH_CHILDREN/2)].attributes.id.value}-${col}`
            item.node.children[(LENGTH_CHILDREN/2)].textContent = `${item.node.children[(LENGTH_CHILDREN/2)].textContent}-${col}`

            for (let index = ( (LENGTH_CHILDREN/2)+1 ); index < LENGTH_CHILDREN; index++) {
              item.node.children[index].attributes.id.value = `${item.node.children[index].attributes.id.value}-${col}`
              item.node.children[index].textContent = cont
              cont++
            }
          } else {
            item.node.id = ''
            item.node.children[0].attributes.id.value = ''

            for (let index = 1; index < (LENGTH_CHILDREN/2); index++) {
              item.node.children[index].attributes.id.value = ''
            }

            for (let index = (LENGTH_CHILDREN/2); index < LENGTH_CHILDREN; index++) {
              item.node.children[index].attributes.id.value = ''
              item.node.children[index].textContent = ''
            }
          }
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesColNumerDesce ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL= SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let cont

      for(let col = 1 ; col <= COL ; col++ ) {
        SVG.select( `#${idZona} g[columna="${col}"]` ).members.forEach( item => {
          const LENGTH_CHILDREN = item.node.children.length
          if ( item.node.attributes.opacity.value === '1' ) {
            cont = 1
            item.node.id = `${item.node.id}-${COL-col+1}`
            item.node.children[0].attributes.id.value = `${item.node.children[0].attributes.id.value}-${COL-col+1}`

            for (let index = 1; index < (LENGTH_CHILDREN/2); index++) {
              item.node.children[index].attributes.id.value = `${item.node.children[index].attributes.id.value}-${COL-col+1}`
            }

            item.node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${item.node.children[(LENGTH_CHILDREN/2)].attributes.id.value}-${COL-col+1}`
            item.node.children[(LENGTH_CHILDREN/2)].textContent = `${item.node.children[(LENGTH_CHILDREN/2)].textContent}-${COL-col+1}`

            for (let index = ( (LENGTH_CHILDREN/2)+1 ); index < LENGTH_CHILDREN; index++) {
              item.node.children[index].attributes.id.value = `${item.node.children[index].attributes.id.value}-${COL-col+1}`
              item.node.children[index].textContent = cont
              cont++
            }
          } else {
            item.node.id = ''
            item.node.children[0].attributes.id.value = ''

            for (let index = 1; index < (LENGTH_CHILDREN/2); index++) {
              item.node.children[index].attributes.id.value = ''
            }

            for (let index = (LENGTH_CHILDREN/2); index < LENGTH_CHILDREN; index++) {
              item.node.children[index].attributes.id.value = ''
              item.node.children[index].textContent = ''
            }
          }
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesHorizIzquiAscenAlfab ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let letra
      let contTables = 1
      let contSeats

      for(let fila = 1; fila <= FILA; fila++) {
        const LENGTH_FILA = SVG.select( `#${idZona} g[fila="${fila}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[fila="${fila}"]` ).members
        for (let index = ( LENGTH_FILA-1 ); index >= 0; index--) {

          const LENGTH_CHILDREN = ITEMS[index].node.children.length
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            contSeats = 1
            letra = this.letter( contTables-1 )
            ITEMS[index].node.id = `${idZona}table-${letra}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${i}${forma}-${letra}`
            }

            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${letra}`
            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].textContent = letra

            for (let i = ( (LENGTH_CHILDREN/2)+1 ); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${contSeats}text-${letra}`
              ITEMS[index].node.children[i].textContent = contSeats
              contSeats++
            }
            contTables++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
            }

            for (let i = (LENGTH_CHILDREN/2); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
              ITEMS[index].node.children[i].textContent = ''
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesHorizIzquiAscenNumer ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let contTables = 1
      let contSeats

      for(let fila = 1; fila <= FILA; fila++) {
        const LENGTH_FILA = SVG.select( `#${idZona} g[fila="${fila}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[fila="${fila}"]` ).members
        for (let index = ( LENGTH_FILA-1 ); index >= 0; index--) {

          const LENGTH_CHILDREN = ITEMS[index].node.children.length
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            contSeats = 1
            ITEMS[index].node.id = `${idZona}table-${contTables}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${contTables}`

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${i}${forma}-${contTables}`
            }

            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${contTables}`
            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].textContent = contTables

            for (let i = ( (LENGTH_CHILDREN/2)+1 ); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${contSeats}text-${contTables}`
              ITEMS[index].node.children[i].textContent = contSeats
              contSeats++
            }
            contTables++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
            }

            for (let i = (LENGTH_CHILDREN/2); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
              ITEMS[index].node.children[i].textContent = ''
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesHorizIzquiDesceAlfab ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let letra
      let contTables = 1
      let contSeats

      for(let fila = FILA; fila >= 1; fila--) {
        const LENGTH_FILA = SVG.select( `#${idZona} g[fila="${fila}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[fila="${fila}"]` ).members
        for (let index = 0; index <= ( LENGTH_FILA-1 ); index++) {
          const LENGTH_CHILDREN = ITEMS[index].node.children.length
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            contSeats = 1
            letra = this.letter( contTables-1 )
            ITEMS[index].node.id = `${idZona}table-${letra}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${i}${forma}-${letra}`
            }

            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${letra}`
            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].textContent = letra

            for (let i = ( (LENGTH_CHILDREN/2)+1 ); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${contSeats}text-${letra}`
              ITEMS[index].node.children[i].textContent = contSeats
              contSeats++
            }
            contTables++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
            }

            for (let i = (LENGTH_CHILDREN/2); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
              ITEMS[index].node.children[i].textContent = ''
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesHorizIzquiDesceNumer ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let contTables = 1
      let contSeats

      for(let fila = FILA; fila >= 1; fila--) {
        const LENGTH_FILA = SVG.select( `#${idZona} g[fila="${fila}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[fila="${fila}"]` ).members
        for (let index = 0; index <= ( LENGTH_FILA-1 ); index++) {

          const LENGTH_CHILDREN = ITEMS[index].node.children.length
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            contSeats = 1
            ITEMS[index].node.id = `${idZona}table-${contTables}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${contTables}`

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${i}${forma}-${contTables}`
            }

            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${contTables}`
            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].textContent = contTables

            for (let i = ( (LENGTH_CHILDREN/2)+1 ); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${contSeats}text-${contTables}`
              ITEMS[index].node.children[i].textContent = contSeats
              contSeats++
            }
            contTables++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
            }

            for (let i = (LENGTH_CHILDREN/2); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
              ITEMS[index].node.children[i].textContent = ''
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesHorizDerecAscenAlfab ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let letra
      let contTables = 1
      let contSeats

      for(let fila = 1; fila <= FILA; fila++) {
        const LENGTH_FILA = SVG.select( `#${idZona} g[fila="${fila}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[fila="${fila}"]` ).members
        for (let index = 0; index <= ( LENGTH_FILA-1 ); index++) {
          const LENGTH_CHILDREN = ITEMS[index].node.children.length
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            contSeats = 1
            letra = this.letter( contTables-1 )
            ITEMS[index].node.id = `${idZona}table-${letra}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${i}${forma}-${letra}`
            }

            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${letra}`
            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].textContent = letra

            for (let i = ( (LENGTH_CHILDREN/2)+1 ); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${contSeats}text-${letra}`
              ITEMS[index].node.children[i].textContent = contSeats
              contSeats++
            }
            contTables++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
            }

            for (let i = (LENGTH_CHILDREN/2); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
              ITEMS[index].node.children[i].textContent = ''
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesHorizDerecAscenNumer ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let contTables = 1
      let contSeats

      for(let fila = 1; fila <= FILA; fila++) {
        const LENGTH_FILA = SVG.select( `#${idZona} g[fila="${fila}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[fila="${fila}"]` ).members
        for (let index = 0; index <= ( LENGTH_FILA-1 ); index++) {

          const LENGTH_CHILDREN = ITEMS[index].node.children.length
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            contSeats = 1
            ITEMS[index].node.id = `${idZona}table-${contTables}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${contTables}`

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${i}${forma}-${contTables}`
            }

            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${contTables}`
            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].textContent = contTables

            for (let i = ( (LENGTH_CHILDREN/2)+1 ); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${contSeats}text-${contTables}`
              ITEMS[index].node.children[i].textContent = contSeats
              contSeats++
            }
            contTables++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
            }

            for (let i = (LENGTH_CHILDREN/2); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
              ITEMS[index].node.children[i].textContent = ''
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesHorizDerecDesceAlfab ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let letra
      let contTables = 1
      let contSeats

      for(let fila = FILA; fila >= 1; fila--) {
        const LENGTH_FILA = SVG.select( `#${idZona} g[fila="${fila}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[fila="${fila}"]` ).members
        for (let index = ( LENGTH_FILA-1 ); index >= 0; index--) {
          const LENGTH_CHILDREN = ITEMS[index].node.children.length
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            contSeats = 1
            letra = this.letter( contTables-1 )
            ITEMS[index].node.id = `${idZona}table-${letra}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${i}${forma}-${letra}`
            }

            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${letra}`
            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].textContent = letra

            for (let i = ( (LENGTH_CHILDREN/2)+1 ); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${contSeats}text-${letra}`
              ITEMS[index].node.children[i].textContent = contSeats
              contSeats++
            }
            contTables++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
            }

            for (let i = (LENGTH_CHILDREN/2); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
              ITEMS[index].node.children[i].textContent = ''
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesHorizDerecDesceNumer ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const FILA = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.fila.value
      let contTables = 1
      let contSeats

      for(let fila = FILA; fila >= 1; fila--) {
        const LENGTH_FILA = SVG.select( `#${idZona} g[fila="${fila}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[fila="${fila}"]` ).members
        for (let index = ( LENGTH_FILA-1 ); index >= 0; index--) {

          const LENGTH_CHILDREN = ITEMS[index].node.children.length
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            contSeats = 1
            ITEMS[index].node.id = `${idZona}table-${contTables}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${contTables}`

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${i}${forma}-${contTables}`
            }

            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${contTables}`
            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].textContent = contTables

            for (let i = ( (LENGTH_CHILDREN/2)+1 ); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${contSeats}text-${contTables}`
              ITEMS[index].node.children[i].textContent = contSeats
              contSeats++
            }
            contTables++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
            }

            for (let i = (LENGTH_CHILDREN/2); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
              ITEMS[index].node.children[i].textContent = ''
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesVertiArribAscenAlfab ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let letra
      let contTables = 1
      let contSeats

      for(let col = 1; col <= COL; col++) {
        const LENGTH_COL = SVG.select( `#${idZona} g[columna="${col}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[columna="${col}"]` ).members
        for (let index = ( LENGTH_COL-1 ); index >= 0; index--) {
          const LENGTH_CHILDREN = ITEMS[index].node.children.length
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            contSeats = 1
            letra = this.letter( contTables-1 )
            ITEMS[index].node.id = `${idZona}table-${letra}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${i}${forma}-${letra}`
            }

            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${letra}`
            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].textContent = letra

            for (let i = ( (LENGTH_CHILDREN/2)+1 ); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${contSeats}text-${letra}`
              ITEMS[index].node.children[i].textContent = contSeats
              contSeats++
            }
            contTables++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
            }

            for (let i = (LENGTH_CHILDREN/2); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
              ITEMS[index].node.children[i].textContent = ''
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesVertiArribAscenNumer ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let contTables = 1
      let contSeats

      for(let col = 1; col <= COL; col++) {
        const LENGTH_COL = SVG.select( `#${idZona} g[columna="${col}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[columna="${col}"]` ).members
        for (let index = ( LENGTH_COL-1 ); index >= 0; index--) {
          const LENGTH_CHILDREN = ITEMS[index].node.children.length
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            contSeats = 1
            ITEMS[index].node.id = `${idZona}table-${contTables}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${contTables}`

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${i}${forma}-${contTables}`
            }

            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${contTables}`
            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].textContent = contTables

            for (let i = ( (LENGTH_CHILDREN/2)+1 ); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${contSeats}text-${contTables}`
              ITEMS[index].node.children[i].textContent = contSeats
              contSeats++
            }
            contTables++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
            }

            for (let i = (LENGTH_CHILDREN/2); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
              ITEMS[index].node.children[i].textContent = ''
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesVertiArribDesceAlfab ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let letra
      let contTables = 1
      let contSeats

      for(let col = COL; col >= 1; col--) {
        const LENGTH_COL = SVG.select( `#${idZona} g[columna="${col}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[columna="${col}"]` ).members
        for (let index = 0; index <= ( LENGTH_COL-1 ); index++) {
          const LENGTH_CHILDREN = ITEMS[index].node.children.length
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            contSeats = 1
            letra = this.letter( contTables-1 )
            ITEMS[index].node.id = `${idZona}table-${letra}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${i}${forma}-${letra}`
            }

            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${letra}`
            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].textContent = letra

            for (let i = ( (LENGTH_CHILDREN/2)+1 ); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${contSeats}text-${letra}`
              ITEMS[index].node.children[i].textContent = contSeats
              contSeats++
            }
            contTables++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
            }

            for (let i = (LENGTH_CHILDREN/2); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
              ITEMS[index].node.children[i].textContent = ''
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesVertiArribDesceNumer ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let contTables = 1
      let contSeats

      for(let col = COL; col >= 1; col--) {
        const LENGTH_COL = SVG.select( `#${idZona} g[columna="${col}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[columna="${col}"]` ).members
        for (let index = 0; index <= ( LENGTH_COL-1 ); index++) {
          const LENGTH_CHILDREN = ITEMS[index].node.children.length
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            contSeats = 1
            ITEMS[index].node.id = `${idZona}table-${contTables}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${contTables}`

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${i}${forma}-${contTables}`
            }

            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${contTables}`
            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].textContent = contTables

            for (let i = ( (LENGTH_CHILDREN/2)+1 ); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${contSeats}text-${contTables}`
              ITEMS[index].node.children[i].textContent = contSeats
              contSeats++
            }
            contTables++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
            }

            for (let i = (LENGTH_CHILDREN/2); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
              ITEMS[index].node.children[i].textContent = ''
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesVertiAbajoAscenAlfab ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let letra
      let contTables = 1
      let contSeats

      for(let col = 1; col <= COL; col++) {
        const LENGTH_COL = SVG.select( `#${idZona} g[columna="${col}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[columna="${col}"]` ).members
        for (let index = 0; index <= ( LENGTH_COL-1 ); index++) {
          const LENGTH_CHILDREN = ITEMS[index].node.children.length
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            contSeats = 1
            letra = this.letter( contTables-1 )
            ITEMS[index].node.id = `${idZona}table-${letra}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${i}${forma}-${letra}`
            }

            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${letra}`
            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].textContent = letra

            for (let i = ( (LENGTH_CHILDREN/2)+1 ); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${contSeats}text-${letra}`
              ITEMS[index].node.children[i].textContent = contSeats
              contSeats++
            }
            contTables++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
            }

            for (let i = (LENGTH_CHILDREN/2); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
              ITEMS[index].node.children[i].textContent = ''
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesVertiAbajoAscenNumer ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let contTables = 1
      let contSeats

      for(let col = 1; col <= COL; col++) {
        const LENGTH_COL = SVG.select( `#${idZona} g[columna="${col}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[columna="${col}"]` ).members
        for (let index = 0; index <= ( LENGTH_COL-1 ); index++) {
          const LENGTH_CHILDREN = ITEMS[index].node.children.length
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            contSeats = 1
            ITEMS[index].node.id = `${idZona}table-${contTables}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${contTables}`

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${i}${forma}-${contTables}`
            }

            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${contTables}`
            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].textContent = contTables

            for (let i = ( (LENGTH_CHILDREN/2)+1 ); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${contSeats}text-${contTables}`
              ITEMS[index].node.children[i].textContent = contSeats
              contSeats++
            }
            contTables++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
            }

            for (let i = (LENGTH_CHILDREN/2); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
              ITEMS[index].node.children[i].textContent = ''
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesVertiAbajoDesceAlfab ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let letra
      let contTables = 1
      let contSeats

      for(let col = COL; col >= 1; col--) {
        const LENGTH_COL = SVG.select( `#${idZona} g[columna="${col}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[columna="${col}"]` ).members
        for (let index = ( LENGTH_COL-1 ); index >= 0; index--) {
          const LENGTH_CHILDREN = ITEMS[index].node.children.length
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            contSeats = 1
            letra = this.letter( contTables-1 )
            ITEMS[index].node.id = `${idZona}table-${letra}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${letra}`

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${i}${forma}-${letra}`
            }

            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${letra}`
            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].textContent = letra

            for (let i = ( (LENGTH_CHILDREN/2)+1 ); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${contSeats}text-${letra}`
              ITEMS[index].node.children[i].textContent = contSeats
              contSeats++
            }
            contTables++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
            }

            for (let i = (LENGTH_CHILDREN/2); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
              ITEMS[index].node.children[i].textContent = ''
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Identifica tables segun parametros
  tablesVertiAbajoDesceNumer ( idZona , forma ) {
    try {
      const LENGTH = SVG.select( `#${idZona} g[typeGroup]` ).members.length
      const COL = SVG.select( `#${idZona} g[typeGroup]` ).members[LENGTH-1].node.attributes.columna.value
      let contTables = 1
      let contSeats

      for(let col = COL; col >= 1; col--) {
        const LENGTH_COL = SVG.select( `#${idZona} g[columna="${col}"]` ).members.length
        const ITEMS = SVG.select( `#${idZona} g[columna="${col}"]` ).members
        for (let index = ( LENGTH_COL-1 ); index >= 0; index--) {
          const LENGTH_CHILDREN = ITEMS[index].node.children.length
          if ( ITEMS[index].node.attributes.opacity.value === '1' ) {
            contSeats = 1
            ITEMS[index].node.id = `${idZona}table-${contTables}`
            ITEMS[index].node.children[0].attributes.id.value = `${idZona}${forma}-${contTables}`

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${i}${forma}-${contTables}`
            }

            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].attributes.id.value = `${idZona}text-${contTables}`
            ITEMS[index].node.children[(LENGTH_CHILDREN/2)].textContent = contTables

            for (let i = ( (LENGTH_CHILDREN/2)+1 ); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = `${idZona}Seat${contSeats}text-${contTables}`
              ITEMS[index].node.children[i].textContent = contSeats
              contSeats++
            }
            contTables++
          } else {
            ITEMS[index].node.id = ''
            ITEMS[index].node.children[0].attributes.id.value = ''

            for (let i = 1; i < (LENGTH_CHILDREN/2); i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
            }

            for (let i = (LENGTH_CHILDREN/2); i < LENGTH_CHILDREN; i++) {
              ITEMS[index].node.children[i].attributes.id.value = ''
              ITEMS[index].node.children[i].textContent = ''
            }
          }
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //NOTE Genera una letra correspondiente a un numero
  letter ( numero ) {
    try {
      let number = numero
      let letras = ''
      let cociente
      let resto
      
      if ( number < this.alfabetico.length ) {
        letras = this.alfabetico[number]

        return letras
      } else {
        while ( true ) {
          cociente = Math.floor( number/this.alfabetico.length )
          resto = number % this.alfabetico.length
          
          letras = this.alfabetico[resto] + letras

          if ( cociente < this.alfabetico.length ) {
            letras = this.alfabetico[cociente-1] + letras
            return letras
          } else {
            number = cociente
          }
        }
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }
  /*#########################################################################*/

  /*#########################################################################*/
  //SECTION Botones de acciones de los puestos y mesas de cada zona
  //NOTE Verifica que opcion esta seleccionada
  buttonsActions () {
    try {
      const ESTATUS_1 = $( `#${this.buttonsAction.estatus}1` )[0].checked
      const ESTATUS_2 = $( `#${this.buttonsAction.estatus}2` )[0].checked
      const VISIBILIDAD_1 = $( `#${this.buttonsAction.visibilidad}1` )[0].checked
      const VISIBILIDAD_2 = $( `#${this.buttonsAction.visibilidad}2` )[0].checked
      const MOVER_1 = $( `#${this.buttonsAction.mover}1` )[0].checked
      const MOVER_2 = $( `#${this.buttonsAction.mover}2` )[0].checked

      if ( ESTATUS_1 ) {
        return this.estatIndiv()
      } else if ( ESTATUS_2 ) {
        return this.estatFila()
      } else if ( VISIBILIDAD_1 ) {
        return this.visible()
      } else if ( VISIBILIDAD_2 ) {
        return this.invisible()
      } else if ( MOVER_1 ) {
        return this.moverIzqui()
      } else if ( MOVER_2 ) {
        return this.moverDerec()
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  /*#########################################################################*/
  //NOTE Cambia estatus al seat o al table donde se hizo click
  estatIndiv () {
    try {
      const TYPEGROUP = this.eventAction.srcElement.parentElement.attributes.typeGroup.value

      if ( TYPEGROUP === 'seat' ) {
        const PARENT_ID = this.eventAction.srcElement.parentElement.id
        const CIRCLE_RECT_ID = SVG.get( PARENT_ID ).node.children[0].id

        return this.estatIndivSeat( CIRCLE_RECT_ID )
      } else if ( TYPEGROUP === 'table' ) {
        const ID_CLICK = this.eventAction.srcElement.id
        const PARENT_ID = this.eventAction.srcElement.parentElement.id

        return this.estatIndivTable( ID_CLICK , PARENT_ID )
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  /*#########################################################################*/
  //NOTE Cambia estatus a los seats o tables de la fila donde se hizo click
  estatFila () {
    try {
      const TYPEGROUP = this.eventAction.srcElement.parentElement.attributes.typeGroup.value

      if ( TYPEGROUP === 'seat' ) {
        const PARENT_ID = this.eventAction.srcElement.parentElement.id
        const FILA = SVG.get( PARENT_ID ).attr( 'fila' )
        const ELEMENTS_FILA = SVG.select( `#${this.zoneActive}Group g[fila="${FILA}"]` )

        ELEMENTS_FILA.members.forEach( item => {
          this.estatIndivSeat( item.node.children[0].id )
        })

        return true
      } else if ( TYPEGROUP === 'table' ) {
        const PARENT_ID = this.eventAction.srcElement.parentElement.id
        const FILA = SVG.get( PARENT_ID ).attr( 'fila' )
        const ELEMENTS_FILA = SVG.select( `#${this.zoneActive}Group g[fila="${FILA}"]` )

        ELEMENTS_FILA.members.forEach( item => {
          this.estatIndivTable( item.node.children[0].id , item.node.id )
        })

        return true
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  /*#########################################################################*/
  //NOTE Cambia estatus al seat donde se hizo click
  estatIndivSeat ( circleRectId ) {
    try {
      const FILL = SVG.get( circleRectId ).attr('fill')

      if ( FILL === this.status.disponible ) {
        SVG.get( circleRectId ).fill( this.status.cortesia )
      } else if ( FILL === this.status.cortesia ) {
        SVG.get( circleRectId ).fill( this.status.bloqueado )
      } else if ( FILL === this.status.bloqueado ) {
        SVG.get( circleRectId ).fill( this.status.disponible )
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  /*#########################################################################*/
  //NOTE Cambia estatus al table donde se hizo click
  estatIndivTable ( idClick , idParent ) {
    try {
      const FIRST_CHILDREN_NODE_NAME = SVG.get( idParent ).node.firstElementChild.nodeName
      let idRectCircle
      let radio = ''
      let width = ''

      if ( FIRST_CHILDREN_NODE_NAME === 'circle' ) {
        idRectCircle = idClick.replace( 'text' , 'Circle' )
        radio = SVG.get( idRectCircle ).attr('r')
      } else if ( FIRST_CHILDREN_NODE_NAME === 'rect' ) {
        idRectCircle = idClick.replace( 'text' , 'Rect' )
        width = SVG.get( idRectCircle ).attr('width')
      }
      
      if ( radio === this.tables.circle.radiusIn || width === this.tables.rect.width ) {
        const CHILDREN = SVG.get( idParent ).node.children
        
        for (let index = 1; index < ( CHILDREN.length/2 ); index++) {
          const FILL = CHILDREN[index].attributes.fill.value
          
          if ( FILL === this.status.disponible ) {
            SVG.get( CHILDREN[index].id ).fill( this.status.cortesia )
          } else if ( FILL === this.status.cortesia ) {
            SVG.get( CHILDREN[index].id ).fill( this.status.bloqueado )
          } else if ( FILL === this.status.bloqueado ) {
            SVG.get( CHILDREN[index].id ).fill( this.status.disponible )
          }
        }

        return true
      } else {
        return this.estatIndivSeat( idRectCircle )
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  /*#########################################################################*/
  //NOTE Oculta seat y table donde se hizo click
  invisible () {
    try {
      const TYPEGROUP = this.eventAction.srcElement.parentElement.attributes.typeGroup.value

      if ( TYPEGROUP === 'seat' ) {
        const PARENT_ID = this.eventAction.srcElement.parentElement.id

        return this.invisGroup( PARENT_ID )
      } else if ( TYPEGROUP === 'table' ) {
        const ID_CLICK = this.eventAction.srcElement.id
        const PARENT_ID = this.eventAction.srcElement.parentElement.id
        
        return this.invisCircleRectText( ID_CLICK , PARENT_ID )
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  /*#########################################################################*/
  //NOTE Oculta el g padre de donde se hizo click
  invisGroup ( idParent ) {
    try {
      const NODENAME = SVG.get( `${this.zoneActive}Group` ).node.childNodes[1].childNodes[0].nodeName

      SVG.get( idParent ).opacity( 0 )

      return ( NODENAME === 'circle' ) ? this.paramSeats( 'Circle' ) : this.paramSeats( 'Rect' )
    } catch (error) {
      console.log(error)
      return false
    }
  }

  /*#########################################################################*/
  //NOTE Oculta el circle, rect , text donde se hizo click
  invisCircleRectText ( idClick , parentId ) {
    try {
      const NODE_NAME = SVG.get( parentId ).node.children[0].nodeName
      let textId
      let circleRectId
      
      if ( NODE_NAME === 'circle' ) {
        circleRectId = idClick.replace( 'text' , 'Circle' )
        textId = idClick.replace( 'Circle' , 'text' )

        const R = SVG.get( circleRectId ).attr( 'r' )

        if ( R === this.tables.circle.radiusIn ) {

          return this.invisGroup( parentId )
        } else {
          SVG.get( circleRectId ).opacity( 0 )
          
          SVG.get( textId ).opacity( 0 )

          return true
        }
      } else if ( NODE_NAME === 'rect' ) {
        circleRectId = idClick.replace( 'text' , 'Rect' )
        textId = idClick.replace( 'Rect' , 'text' )

        const WIDTH = SVG.get( circleRectId ).attr( 'width' )

        if ( WIDTH === this.tables.rect.width ) {

          return this.invisGroup( parentId )
        } else {
          SVG.get( circleRectId ).opacity( 0 )

          SVG.get( textId ).opacity( 0 )
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  /*#########################################################################*/
  //NOTE Muestra seat y table donde se hizo click
  visible () {
    try {
      const TYPEGROUP = this.eventAction.srcElement.parentElement.attributes.typeGroup.value

      if ( TYPEGROUP === 'seat' ) {

        return this.visibGroup()
      } else if ( TYPEGROUP === 'table' ) {
        
        return this.visibCircleRectText()
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  /*#########################################################################*/
  //NOTE Muestra el g padre de donde se hizo click
  visibGroup () {
    try {
      const NODENAME = SVG.get( `${this.zoneActive}Group` ).node.childNodes[1].childNodes[0].nodeName

      this.eventAction.srcElement.parentElement.attributes.opacity.value = '1'

      return ( NODENAME === 'circle' ) ? this.paramSeats( 'Circle' ) : this.paramSeats( 'Rect' )
    } catch (error) {
      console.log(error)
      return false
    }
  }

  /*#########################################################################*/
  //NOTE Muestra el circle, rect , text donde se hizo click
  visibCircleRectText () {
    try {
      const NODE_NAME = this.eventAction.srcElement.parentElement.children[0].nodeName
      let textId
      let circleRectId
      
      if ( NODE_NAME === 'circle' ) {
        const ID_CLICK = this.eventAction.srcElement.id
        
        if ( ID_CLICK === '' ) {
          return ( this.visibGroup() ) ? this.paramSeats( 'Circle' ) : false
        } else {
          SVG.get( ID_CLICK.replace( 'text' , 'Circle' ) ).opacity( 1 )
          
          SVG.get( ID_CLICK.replace( 'Circle' , 'text' ) ).opacity( 1 )

          return true
        }
      } else if ( NODE_NAME === 'rect' ) {
        const ID_CLICK = this.eventAction.srcElement.id
        
        if ( ID_CLICK === '' ) {
          return ( this.visibGroup() ) ? this.paramSeats( 'Rect' ) : false
        } else {
          SVG.get( ID_CLICK.replace( 'text' , 'Rect' ) ).opacity( 1 )
          
          SVG.get( ID_CLICK.replace( 'Rect' , 'text' ) ).opacity( 1 )

          return true
        }
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  /*#########################################################################*/
  //NOTE Verifica que se pueda mover a la izquierda y de ser posible lo hace
  moverIzqui () {
    try {
      const OFFSET = parseInt( this.eventAction.srcElement.parentElement.attributes.offset.value )

      if ( OFFSET === 0 ) {
        Swal({
          type: 'info',
          title: 'Oops...',
          text: 'Debe mover a la derecha primero!'
        })

        return true
      } else if ( OFFSET > 0 ) {
        return this.moverIzquiRow()
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  /*#########################################################################*/
  //NOTE Mueve hacia la izquierda la fila completa
  moverIzquiRow () {
    try {
      const FILA = parseInt( this.eventAction.srcElement.parentElement.attributes.fila.value )
      const TYPEGROUP = this.eventAction.srcElement.parentElement.attributes.typeGroup.value

      if ( TYPEGROUP === 'seat' ) {
        return ( this.moverHorizEleme( FILA , -this.seats.circle.cellX/2 , -this.seats.rect.cellX/2 ) ) ? this.adaptWidthRect( FILA , -this.seats.circle.cellX/2 , -this.seats.rect.cellX/2 ) : false
      } else if ( TYPEGROUP === 'table' ) {
        return ( this.moverHorizEleme( FILA , -this.tables.circle.cellX/2 , -this.tables.rect.cellX/2 ) ) ? this.adaptWidthRect( FILA , -this.tables.circle.cellX/2 , -this.tables.rect.cellX/2 ) : false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  /*#########################################################################*/
  //NOTE Verifica que se pueda mover a la derecha y de ser posible lo hace
  moverDerec () {
    try {
      return this.moverDerecRow()
    } catch (error) {
      console.log(error)
      return false
    }
  }

  /*#########################################################################*/
  //NOTE Mueve hacia la derecha la fila completa
  moverDerecRow () {
    try {
      const FILA = parseInt( this.eventAction.srcElement.parentElement.attributes.fila.value )
      const TYPEGROUP = this.eventAction.srcElement.parentElement.attributes.typeGroup.value

      if ( TYPEGROUP === 'seat' ) {
        return ( this.moverHorizEleme( FILA , this.seats.circle.cellX/2 , this.seats.rect.cellX/2 ) ) ? this.adaptWidthRect( FILA , this.seats.circle.cellX/2 , this.seats.rect.cellX/2 ) : false
      } else if ( TYPEGROUP === 'table' ) {
        return ( this.moverHorizEleme( FILA , this.tables.circle.cellX/2 , this.tables.rect.cellX/2 ) ) ? this.adaptWidthRect( FILA , this.tables.circle.cellX/2 , this.tables.rect.cellX/2 ) : false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  /*#########################################################################*/
  //NOTE Mueve hacia la derecha o izquierda circle, rect, text
  moverHorizEleme ( fila , offsetCircleX , offsetRectX ) {
    try {
      const GROUPS = SVG.select( `#${this.zoneActive}Group g[fila="${fila}"]` )
      const I = ( offsetCircleX > 0 && offsetRectX > 0 ) ? 1 : -1
      let x
      let cx
      let xOffset
      let offset

      GROUPS.members.forEach( group => {
        group.node.childNodes.forEach( item => {
          if ( item.nodeName === 'circle' ) {
            xOffset = offsetCircleX
            cx = parseFloat( item.attributes.cx.value )
            item.attributes.cx.value = ( cx+xOffset ).toString()
          } else if ( item.nodeName === 'rect' ) {
            xOffset = offsetRectX
            x = parseFloat( item.attributes.x.value )
            item.attributes.x.value = ( x+xOffset ).toString()
          } else {
            x = parseFloat( item.attributes.x.value )
            item.attributes.x.value = ( x+xOffset ).toString()
          }
        })

        offset = parseInt( group.node.attributes.offset.value )
        group.node.attributes.offset.value = ( offset+I ).toString()
      })

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  /*#########################################################################*/
  //NOTE Mueve hacia la derecha o izquierda circle, rect, text
  adaptWidthRect ( fila , offsetCircleX , offsetRectX ) {
    try {
      const NODENAME = SVG.get( `${this.zoneActive}Group` ).node.childNodes[1].childNodes[0].nodeName
      const WIDTH = SVG.get( `${this.zoneActive}Rect` ).attr( 'width' )
      const HEIGHT = SVG.get( `${this.zoneActive}Rect` ).attr( 'height' )
      const LENGTH = SVG.select( `#${this.zoneActive}Group g[fila="${fila}"]` ).members.length

      if ( NODENAME === 'circle' ) {
        const CX_MAX = parseFloat( SVG.select( `#${this.zoneActive}Group g[fila="${fila}"]` ).members[LENGTH-1].node.firstChild.attributes.cx.value )
        if ( ( CX_MAX+offsetCircleX ) > WIDTH || ( CX_MAX-offsetCircleX ) > WIDTH ) {
          SVG.get( `${this.zoneActive}Rect` ).attr( 'width' , WIDTH+offsetCircleX )
          $( `#${this.idDrawMap}` ).attr({
            viewBox:`0 0 ${WIDTH+offsetCircleX} ${HEIGHT}`
          })
        }
      } else if ( NODENAME === 'rect' ) {
        const X_MAX = parseFloat( SVG.select( `#${this.zoneActive}Group g[fila="${fila}"]` ).members[LENGTH-1].node.firstChild.attributes.x.value )
        if ( ( X_MAX+offsetCircleX ) > WIDTH || ( X_MAX-offsetCircleX ) > WIDTH ) {
          SVG.get( `${this.zoneActive}Rect` ).attr( 'width' , WIDTH+offsetRectX )
          $( `#${this.idDrawMap}` ).attr({
            viewBox:`0 0 ${WIDTH+offsetRectX} ${HEIGHT}`
          })
        }
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
  /*#########################################################################*/

  /*#########################################################################*/
  //SECTION Operaciones con nombre de zona
  //NOTE Asigna nombre de zona
  setNameZone () {
    try {
      const NAME_ZONE = $( `#${this.inputs.idNombreZona}` ).val()
      
      if ( this.zoneActive != '' ) {
        SVG.get( `${this.zoneActive}` ).attr( 'name' , NAME_ZONE )
        return true
      } else {
        return false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }
  /*#########################################################################*/
}
/*#########################################################################*/