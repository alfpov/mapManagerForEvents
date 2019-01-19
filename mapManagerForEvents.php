<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="Trabajo">
  <meta name="author" content="Alfredo Poveda">
  <meta name="generator" content="Visual Studio Code">
  <meta name="keywords" content="Panel de control">
  <title>SVG</title>
  <!-- Icono -->
<<<<<<< HEAD
  <link rel="icon" href="">
=======
  <link rel="icon" href="images/ED-icon.svg">
>>>>>>> master
  <!-- Add Material CSS, replace Bootstrap CSS -->
  <link href="css/material.min.css" type="text/css" rel="stylesheet">
  <!-- mCustomScrollbar -->
  <link href="css/jquery.mCustomScrollbar.min.css" type="text/css" rel="stylesheet">
  <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/malihu-custom-scrollbar-plugin@3.1.5/jquery.mCustomScrollbar.css" integrity="sha256-FzDSfCZaTH7qcj5EpRUsb98KPowD0alLR7LhpZSRfqU=" crossorigin="anonymous"> -->
  <!-- <link href="https://cdn.jsdelivr.net/npm/malihu-custom-scrollbar-plugin@3.1.5/mCSB_buttons.png" integrity="sha256-6YysSPXBOz+6ooRY8NjyanjJ2UT49O2tmryySbkCjKc=" crossorigin="anonymous"> -->
  <!-- Sweet Alert -->
  <link rel="stylesheet" href="css/sweetalert2.min.css">
  <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@7.32.4/dist/sweetalert2.min.css" integrity="sha256-uMEgdSzF6KzpJADQ5oAz2/+Pic69IkX0lyubjbNelv0=" crossorigin="anonymous"> -->
  <!-- Your custom styles (optional) -->
  <link href="sass/mapManagerForEvents.css" rel="stylesheet">
</head>
<body class="mx-4 bg-info">
	<div class="row">
		<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 bg-info-light text-center panel">
      <!-- Material form register -->
      <form method="post">
        <legend><u>Crear puestos</u></legend>
        <div class="row">
          <div id="nombreZonaParent" class="form-group col-lg-12 col-md-4 col-sm-4 col-12">
            <label for="nombreZona">Nombre zona</label>
            <input type="text" class="form-control" id="nombreZona" name="nombreZona" placeholder="Nombre zona">
            <div id="nombreZonaOut" class="alert alert-secondary d-none" role="alert"></div>
          </div>
          <div id="cantFilasParent" class="form-group col-lg-12 col-md-4 col-sm-4 col-12">
            <label for="cantFilas">Número de filas</label>
            <input type="text" class="form-control" id="cantFilas" name="cantFilas" placeholder="Número de filas">
            <div id="cantFilasOut" class="alert alert-secondary d-none" role="alert"></div>
          </div>
          <div id="cantColParent" class="form-group col-lg-12 col-md-4 col-sm-4 col-12">
            <label for="cantCol">Número de columnas</label>
            <input type="text" class="form-control" id="cantCol" name="cantCol" placeholder="Número de columnas">
            <div id="cantColOut" class="alert alert-secondary d-none" role="alert"></div>
          </div>
          <div id="aforoParent" class="form-group col-lg-12 col-md-4 col-sm-4 col-12 d-none">
            <label for="aforo">Aforo</label>
            <input type="text" class="form-control" id="aforo" name="aforo" placeholder="Aforo">
            <div id="aforoOut" class="alert alert-secondary d-none" role="alert"></div>
          </div>
          <div id="cantChairParent" class="form-group col-lg-12 col-md-4 col-sm-4 col-12">
            <label for="cantChair">Número de sillas</label>
            <input type="text" class="form-control" id="cantChair" name="cantChair" placeholder="Número de sillas en cada mesa">
            <div id="cantChairOut" class="alert alert-secondary d-none" role="alert"></div>
          </div>
          <div class="w-100" id="buttonsControl">
            <div class="btn-group-vertical bg-light">
              <div id="distribucion" class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-light text-black ml-0 mr-auto">
                  <input type="radio" name="distribucion" id="distribucion0" autocomplete="off"> Distribucion
                </label>
                <label class="btn btn-light text-black ml-auto mr-0 w-20 active" data-toggle="tooltip" data-placement="top" title="Ordenada">
                  <input type="radio" name="distribucion" id="distribucion1" autocomplete="off" checked><i class="fas fa-th"></i>
                </label>
                <label class="btn btn-light text-black ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Libre">
                  <input type="radio" name="distribucion" id="distribucion2" autocomplete="off">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 430.122 430.123" style="enable-background:new 0 0 430.122 430.123;" xml:space="preserve">
	                  <path d="M369.924,290.526c0-16.475,13.479-29.837,30.103-29.837c16.634,0,30.094,13.362,30.094,29.837   s-13.46,29.837-30.094,29.837C383.412,320.363,369.924,307,369.924,290.526z M400.026,166.927c16.634,0,30.094-13.361,30.094-29.83   c0-16.472-13.46-29.836-30.094-29.836c-16.624,0-30.103,13.364-30.103,29.836C369.924,153.566,383.412,166.927,400.026,166.927z    M285.926,173.146c0,16.477,13.46,29.832,30.098,29.832c16.62,0,30.099-13.354,30.099-29.832c0-16.473-13.479-29.837-30.099-29.837   C299.386,143.305,285.926,156.669,285.926,173.146z M136.689,370.455c-16.622,0-30.098,13.356-30.098,29.832   c0,16.475,13.477,29.836,30.098,29.836s30.098-13.361,30.098-29.836C166.787,383.811,153.306,370.455,136.689,370.455z    M255.813,143.305c16.629,0,30.112-13.362,30.112-29.834c0-16.475-13.479-29.832-30.112-29.832   c-16.619,0-30.093,13.357-30.093,29.832C225.721,129.943,239.199,143.305,255.813,143.305z M316.023,225.355   c-16.629,0-30.098,13.361-30.098,29.832c0,16.475,13.46,29.832,30.098,29.832c16.62,0,30.099-13.357,30.099-29.832   C346.122,238.716,332.644,225.355,316.023,225.355z M174.315,285.028c-16.622,0-30.098,13.357-30.098,29.832   s13.477,29.832,30.098,29.832s30.098-13.357,30.098-29.832S190.932,285.028,174.315,285.028z M293.08,370.455   c-16.619,0-30.098,13.356-30.098,29.832c0,16.475,13.479,29.836,30.098,29.836c16.62,0,30.099-13.361,30.099-29.836   C323.179,383.811,309.7,370.455,293.08,370.455z M293.08,59.671c16.62,0,30.099-13.362,30.099-29.834   C323.179,13.362,309.7,0,293.08,0c-16.619,0-30.098,13.362-30.098,29.837C262.982,46.309,276.461,59.671,293.08,59.671z    M114.117,285.028c16.622,0,30.1-13.362,30.1-29.832c0-16.475-13.479-29.841-30.1-29.841s-30.089,13.366-30.089,29.841   C84.028,271.666,97.495,285.028,114.117,285.028z M30.1,166.927c16.622,0,30.101-13.361,30.101-29.83   c0-16.472-13.479-29.836-30.101-29.836c-16.622,0-30.098,13.364-30.098,29.836C0.002,153.566,13.478,166.927,30.1,166.927z    M30.1,320.363c16.622,0,30.101-13.362,30.101-29.837S46.722,260.689,30.1,260.689c-16.622,0-30.098,13.362-30.098,29.837   S13.478,320.363,30.1,320.363z M114.117,202.978c16.622,0,30.1-13.354,30.1-29.832c0-16.473-13.479-29.837-30.1-29.837   s-30.089,13.364-30.089,29.837C84.028,189.624,97.495,202.978,114.117,202.978z M255.813,344.692   c16.629,0,30.112-13.357,30.112-29.832s-13.479-29.832-30.112-29.832c-16.619,0-30.093,13.357-30.093,29.832   S239.199,344.692,255.813,344.692z M144.217,113.471c0,16.473,13.477,29.834,30.098,29.834s30.098-13.362,30.098-29.834   c0-16.475-13.477-29.832-30.098-29.832S144.217,96.996,144.217,113.471z M136.689,59.671c16.622,0,30.098-13.362,30.098-29.834   c-0.005-16.475-13.481-29.832-30.098-29.832s-30.098,13.362-30.098,29.836C106.591,46.309,120.067,59.671,136.689,59.671z" fill="currentColor"/>
                  </svg>
                </label>
              </div>
              <div id="asiento" class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-light text-black ml-0 mr-auto">
                  <input type="radio" name="asiento" id="asiento0" autocomplete="off"> Asiento
                </label>
                <label class="btn btn-light text-black ml-auto mr-0 w-20 active" data-toggle="tooltip" data-placement="top" title="Sillas">
                  <input type="radio" name="asiento" id="asiento1" autocomplete="off" checked><i class="fas fa-chair"></i></i>
                </label>
                <label class="btn btn-light text-black ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Mesas">
                  <input type="radio" name="asiento" id="asiento2" autocomplete="off">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 44.999 44.999" style="enable-background:new 0 0 44.999 44.999;" xml:space="preserve">
	                  <path d="M42.558,23.378l2.406-10.92c0.18-0.816-0.336-1.624-1.152-1.803c-0.816-0.182-1.623,0.335-1.802,1.151l-2.145,9.733    h-9.647c-0.835,0-1.512,0.677-1.512,1.513c0,0.836,0.677,1.513,1.512,1.513h0.573l-3.258,7.713    c-0.325,0.771,0.034,1.657,0.805,1.982c0.19,0.081,0.392,0.12,0.588,0.12c0.59,0,1.15-0.348,1.394-0.925l2.974-7.038l4.717,0.001    l2.971,7.037c0.327,0.77,1.215,1.127,1.982,0.805c0.77-0.325,1.13-1.212,0.805-1.982l-3.257-7.713h0.573    C41.791,24.564,42.403,24.072,42.558,23.378z" fill="currentColor"/>
	                  <path d="M14.208,24.564h0.573c0.835,0,1.512-0.677,1.512-1.513c0-0.836-0.677-1.513-1.512-1.513H5.134L2.99,11.806    C2.809,10.99,2,10.472,1.188,10.655c-0.815,0.179-1.332,0.987-1.152,1.803l2.406,10.92c0.153,0.693,0.767,1.187,1.477,1.187h0.573    L1.234,32.28c-0.325,0.77,0.035,1.655,0.805,1.98c0.768,0.324,1.656-0.036,1.982-0.805l2.971-7.037l4.717-0.001l2.972,7.038    c0.244,0.577,0.804,0.925,1.394,0.925c0.196,0,0.396-0.039,0.588-0.12c0.77-0.325,1.13-1.212,0.805-1.98L14.208,24.564z" fill="currentColor"/>
	                  <path d="M24.862,31.353h-0.852V18.308h8.13c0.835,0,1.513-0.677,1.513-1.512s-0.678-1.513-1.513-1.513H12.856    c-0.835,0-1.513,0.678-1.513,1.513c0,0.834,0.678,1.512,1.513,1.512h8.13v13.045h-0.852c-0.835,0-1.512,0.679-1.512,1.514    s0.677,1.513,1.512,1.513h4.728c0.837,0,1.514-0.678,1.514-1.513S25.699,31.353,24.862,31.353z" fill="currentColor"/>
                  </svg>
                </label>
              </div>
              <div id="forma" class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-light text-black ml-0 mr-auto">
                  <input type="radio" name="forma" id="forma0" autocomplete="off"> Forma
                </label>
                <label class="btn btn-light text-black ml-auto mr-0 w-20 active" data-toggle="tooltip" data-placement="top" title="Circular">
                  <input type="radio" name="forma" id="forma1" autocomplete="off" checked>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="currentColor"/>
                  </svg>
                </label>
                <label class="btn btn-light text-black ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Rectangular">
                  <input type="radio" name="forma" id="forma2" autocomplete="off">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <rect x="0" y="0" width="24" height="24" fill="currentColor"/>
                  </svg>
                </label>
              </div>
              <div id="referencia" class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-light text-black ml-0 mr-auto">
                  <input type="radio" name="referencia" id="referencia0" autocomplete="off"> Referencia
                </label>
                <label class="btn btn-light text-black ml-auto mr-0 w-20 active" data-toggle="tooltip" data-placement="top" title="Filas y columnas">
                  <input type="radio" name="referencia" id="referencia1" autocomplete="off" checked>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448">
                    <path d="m144 184h160v144h-160zm0 0" fill="currentColor"/>
                    <path d="m0 448h448v-384h-448zm40-264c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h88v-64c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v64h160v-64c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v64h88c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8h-88v144h88c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8h-88v64c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8v-64h-160v64c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8v-64h-88c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h88v-144zm0 0" fill="currentColor"/>
                  </svg>
                </label>
                <label class="btn btn-light text-black ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Lineal">
                  <input type="radio" name="referencia" id="referencia2" autocomplete="off"><i class="fas fa-ellipsis-h"></i>
                </label>
              </div>
              <div id="indiceFila" class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-light text-black ml-0 mr-auto">
                  <input type="radio" name="indiceFila" id="indiceFila0" autocomplete="off"> Indice Fila
                </label>
                <label class="btn btn-light text-black ml-auto mr-0 w-20 active" data-toggle="tooltip" data-placement="top" title="Alfabético">
                  <input type="radio" name="indiceFila" id="indiceFila1" autocomplete="off" checked>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <g transform="matrix(1.25 0 0 -1.25 0 45)">
                      <path style="fill:currentColor;" d="M171.691-195.89h67.026L205.915-93.582h-0.705L171.691-195.89z M167.811-67.822 c5.996,16.225,19.752,29.275,37.751,29.275c18.694,0,31.755-12.345,37.74-29.275l69.154-191.909 c2.105-5.643,2.822-10.593,2.822-13.062c0-13.756-11.298-23.279-24.337-23.279c-14.825,0-22.232,7.76-25.759,18.341 l-10.581,33.166h-98.076l-10.581-32.814c-3.527-10.934-10.945-18.694-25.407-18.694c-14.108,0-26.101,10.581-26.101,24.69 c0,5.643,1.764,9.876,2.469,11.651L167.811-67.822L167.811-67.822z"/>
                    </g>
                  </svg>
                </label>
                <label class="btn btn-light text-black ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Numérico">
                  <input type="radio" name="indiceFila" id="indiceFila2" autocomplete="off">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <g transform="matrix(1.25 0 0 -1.25 0 45)">
	                    <path style="fill:currentColor;" d="M187.301-91.147h-20.81c-16.93,0-23.996,12.345-23.996,24.337 c0,12.356,8.818,24.348,23.996,24.348h50.085c15.178,0,23.643-10.934,23.643-25.042v-200.738 c0-17.647-11.287-27.511-26.465-27.511c-15.167,0-26.453,9.865-26.453,27.511V-91.147z"/>
                    </g>
                  </svg>
                </label>
              </div>
              <div id="indiceCol" class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-light text-black ml-0 mr-auto">
                  <input type="radio" name="indiceCol" id="indiceCol0" autocomplete="off"> Indice Col...
                </label>
                <label class="btn btn-light text-black ml-auto mr-0 w-20 active" data-toggle="tooltip" data-placement="top" title="Alfabético">
                  <input type="radio" name="indiceCol" id="indiceCol1" autocomplete="off" checked>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <g transform="matrix(1.25 0 0 -1.25 0 45)">
                      <path style="fill:currentColor;" d="M171.691-195.89h67.026L205.915-93.582h-0.705L171.691-195.89z M167.811-67.822 c5.996,16.225,19.752,29.275,37.751,29.275c18.694,0,31.755-12.345,37.74-29.275l69.154-191.909 c2.105-5.643,2.822-10.593,2.822-13.062c0-13.756-11.298-23.279-24.337-23.279c-14.825,0-22.232,7.76-25.759,18.341 l-10.581,33.166h-98.076l-10.581-32.814c-3.527-10.934-10.945-18.694-25.407-18.694c-14.108,0-26.101,10.581-26.101,24.69 c0,5.643,1.764,9.876,2.469,11.651L167.811-67.822L167.811-67.822z"/>
                    </g>
                  </svg>
                </label>
                <label class="btn btn-light text-black ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Numérico">
                  <input type="radio" name="indiceCol" id="indiceCol2" autocomplete="off">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <g transform="matrix(1.25 0 0 -1.25 0 45)">
	                    <path style="fill:currentColor;" d="M187.301-91.147h-20.81c-16.93,0-23.996,12.345-23.996,24.337 c0,12.356,8.818,24.348,23.996,24.348h50.085c15.178,0,23.643-10.934,23.643-25.042v-200.738 c0-17.647-11.287-27.511-26.465-27.511c-15.167,0-26.453,9.865-26.453,27.511V-91.147z"/>
                    </g>
                  </svg>
                </label>
              </div>
              <div id="indice" class="btn-group btn-group-toggle d-none" data-toggle="buttons">
                <label class="btn btn-light text-black ml-0 mr-auto">
                  <input type="radio" name="indice" id="indice0" autocomplete="off"> Indice
                </label>
                <label class="btn btn-light text-black ml-auto mr-0 w-20 active" data-toggle="tooltip" data-placement="top" title="Alfabético">
                  <input type="radio" name="indice" id="indice1" autocomplete="off" checked>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <g transform="matrix(1.25 0 0 -1.25 0 45)">
                      <path style="fill:currentColor;" d="M171.691-195.89h67.026L205.915-93.582h-0.705L171.691-195.89z M167.811-67.822 c5.996,16.225,19.752,29.275,37.751,29.275c18.694,0,31.755-12.345,37.74-29.275l69.154-191.909 c2.105-5.643,2.822-10.593,2.822-13.062c0-13.756-11.298-23.279-24.337-23.279c-14.825,0-22.232,7.76-25.759,18.341 l-10.581,33.166h-98.076l-10.581-32.814c-3.527-10.934-10.945-18.694-25.407-18.694c-14.108,0-26.101,10.581-26.101,24.69 c0,5.643,1.764,9.876,2.469,11.651L167.811-67.822L167.811-67.822z"/>
                    </g>
                  </svg>
                </label>
                <label class="btn btn-light text-black ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Numérico">
                  <input type="radio" name="indice" id="indice2" autocomplete="off">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <g transform="matrix(1.25 0 0 -1.25 0 45)">
	                    <path style="fill:currentColor;" d="M187.301-91.147h-20.81c-16.93,0-23.996,12.345-23.996,24.337 c0,12.356,8.818,24.348,23.996,24.348h50.085c15.178,0,23.643-10.934,23.643-25.042v-200.738 c0-17.647-11.287-27.511-26.465-27.511c-15.167,0-26.453,9.865-26.453,27.511V-91.147z"/>
                    </g>
                  </svg>
                </label>
              </div>
              <div id="orden" class="btn-group btn-group-toggle d-none" data-toggle="buttons">
                <label class="btn btn-light text-black ml-0 mr-auto">
                  <input type="radio" name="orden" id="orden0" autocomplete="off"> Orden
                </label>
                <label class="btn btn-light text-black ml-auto mr-0 w-20 active" data-toggle="tooltip" data-placement="top" title="Ascendente">
                  <input type="radio" name="orden" id="orden1" autocomplete="off" checked><i class="fas fa-sort-amount-up"></i>
                </label>
                <label class="btn btn-light text-black ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Descendente">
                  <input type="radio" name="orden" id="orden2" autocomplete="off"><i class="fas fa-sort-amount-down"></i>
                </label>
              </div>
              <div id="ordenFila" class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-light text-black ml-0 mr-auto">
                  <input type="radio" name="ordenFila" id="ordenFila0" autocomplete="off"> Orden Fila
                </label>
                <label class="btn btn-light text-black ml-auto mr-0 w-20 active" data-toggle="tooltip" data-placement="top" title="Ascendente">
                  <input type="radio" name="ordenFila" id="ordenFila1" autocomplete="off" checked><i class="fas fa-sort-amount-up"></i>
                </label>
                <label class="btn btn-light text-black ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Descendente">
                  <input type="radio" name="ordenFila" id="ordenFila2" autocomplete="off"><i class="fas fa-sort-amount-down"></i>
                </label>
              </div>
              <div id="ordenCol" class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-light text-black ml-0 mr-auto">
                  <input type="radio" name="ordenCol" id="ordenCol0" autocomplete="off"> Orden Col...
                </label>
                <label class="btn btn-light text-black ml-auto mr-0 w-20 active" data-toggle="tooltip" data-placement="top" title="Ascendente">
                  <input type="radio" name="ordenCol" id="ordenCol1" autocomplete="off" checked><i class="fas fa-sort-amount-up"></i>
                </label>
                <label class="btn btn-light text-black ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Descendente">
                  <input type="radio" name="ordenCol" id="ordenCol2" autocomplete="off"><i class="fas fa-sort-amount-down"></i>
                </label>
              </div>
              <div id="direccion" class="btn-group btn-group-toggle d-none" data-toggle="buttons">
                <label class="btn btn-light text-black ml-0 mr-auto">
                  <input type="radio" name="direccion" id="direccion0" autocomplete="off"> Dirección
                </label>
                <label class="btn btn-light text-black ml-auto mr-0 w-20 active" data-toggle="tooltip" data-placement="top" title="Dirección horizontal">
                  <input type="radio" name="direccion" id="direccion1" autocomplete="off" checked><i class="fas fa-arrows-alt-h"></i>
                </label>
                <label class="btn btn-light text-black ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="dirección vertical">
                  <input type="radio" name="direccion" id="direccion2" autocomplete="off"><i class="fas fa-arrows-alt-v"></i>
                </label>
              </div>
              <div id="sentidoH" class="btn-group btn-group-toggle d-none" data-toggle="buttons">
                <label class="btn btn-light text-black ml-0 mr-auto">
                  <input type="radio" name="sentidoH" id="sentidoH0" autocomplete="off"> Sentido ho...
                </label>
                <label class="btn btn-light text-black ml-auto mr-0 w-20 active" data-toggle="tooltip" data-placement="top" title="Sentido hacia la izquierda">
                  <input type="radio" name="sentidoH" id="sentidoH1" autocomplete="off" checked><i class="fas fa-arrow-left"></i>
                </label>
                <label class="btn btn-light text-black ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Sentido hacia la derecha">
                  <input type="radio" name="sentidoH" id="sentidoH2" autocomplete="off"><i class="fas fa-arrow-right"></i>
                </label>
              </div>
              <div id="sentidoV" class="btn-group btn-group-toggle d-none" data-toggle="buttons">
                <label class="btn btn-light text-black ml-0 mr-auto">
                  <input type="radio" name="sentidoV" id="sentidoV0" autocomplete="off"> Sentido ve...
                </label>
                <label class="btn btn-light text-black ml-auto mr-0 w-20 active" data-toggle="tooltip" data-placement="top" title="Sentido hacia arriba">
                  <input type="radio" name="sentidoV" id="sentidoV1" autocomplete="off" checked><i class="fas fa-arrow-up"></i>
                </label>
                <label class="btn btn-light text-black ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Sentido hacia abajo">
                  <input type="radio" name="sentidoV" id="sentidoV2" autocomplete="off"><i class="fas fa-arrow-down"></i>
                </label>
              </div>
              <div id="sentidoChair" class="btn-group btn-group-toggle d-none" data-toggle="buttons">
                <label class="btn btn-light text-black ml-0 mr-auto">
                  <input type="radio" name="sentidoChair" id="sentidoChair0" autocomplete="off"> Sentido sil...
                </label>
                <label class="btn btn-light text-black ml-auto mr-0 w-20 active" data-toggle="tooltip" data-placement="top" title="Sentido horario">
                  <input type="radio" name="sentidoChair" id="sentidoChair1" autocomplete="off" checked><i class="fas fa-clock"></i>
                </label>
                <label class="btn btn-light text-black ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Sentido antihorario">
                  <input type="radio" name="sentidoChair" id="sentidoChair2" autocomplete="off"><i class="far fa-clock"></i>
                </label>
              </div>
            </div>
          </div>
          <div class="w-100 mt-2" id="buttonsAction">
            <div class="btn-group-vertical bg-light">
              <div id="estatus" class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-light ml-0 mr-auto">
                  <input type="radio" name="estatus" id="estatus0" autocomplete="off"> Estatus
                </label>
                <label class="btn btn-light ml-auto mr-0 w-20 active" data-toggle="tooltip" data-placement="top" title="Estatus Individual">
                  <input type="radio" name="estatus" id="estatus1" autocomplete="off" checked><i class="fas fa-flag-checkered"></i>
                </label>
                <label class="btn btn-light ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Estatus fila">
                  <input type="radio" name="estatus" id="estatus2" autocomplete="off"><i class="fas fa-flag"></i>
                </label>
              </div>
              <div id="visibilidad" class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-light ml-0 mr-auto active">
                  <input type="radio" name="visibilidad" id="visibilidad0" autocomplete="off" checked> Visibilidad
                </label>
                <label class="btn btn-light ml-auto mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Mostrar">
                  <input type="radio" name="visibilidad" id="visibilidad1" autocomplete="off"><i class="fas fa-eye"></i>
                </label>
                <label class="btn btn-light ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Ocultar">
                  <input type="radio" name="visibilidad" id="visibilidad2" autocomplete="off"><i class="fas fa-eye-slash"></i>
                </label>
              </div>
              <div id="mover" class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-light ml-0 mr-auto active">
                  <input type="radio" name="mover" id="mover0" autocomplete="off" checked> Mover
                </label>
                <label class="btn btn-light ml-auto mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Mover hacia la izquierda">
                  <input type="radio" name="mover" id="mover1" autocomplete="off"><i class="fas fa-angle-double-left"></i>
                </label>
                <label class="btn btn-light ml-0 mr-0 w-20" data-toggle="tooltip" data-placement="top" title="Mover hacia la derecha">
                  <input type="radio" name="mover" id="mover2" autocomplete="off"><i class="fas fa-angle-double-right"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-info my-4" id="btnGuardar"><i class="far fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-info my-4" id="btnModificar">Modificar</button>
      </form>
      <!-- Material form register -->
    </div>
    
    <div id="container" class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 px-0 text-center">
      <div id="bar" class="bar rounded d-none"></div>
      <div id="map" class=""></div>
    </div>
	</div>
	
	<!-- JQuery -->
	<script src="js/jquery-3.3.1.min.js"></script>
  <!-- <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script> -->
  <!-- Popper -->
  <script src="js/popper.min.js"></script>
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script> -->
  <!-- Bootstrap -->
  <script src="js/bootstrap.min.js"></script>
  <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script> -->
  <!-- Then Material JavaScript on top of Bootstrap JavaScript -->
  <script src="js/material.min.js"></script>
  <!-- SVG -->
  <script src="js/svg.min.js"></script>
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/svg.js/2.7.0/svg.min.js" integrity="sha256-rPc378P1HEO3/go/TocnR/YARHHH0TWrGOTWAATaSFw=" crossorigin="anonymous"></script> -->
  <!-- mCustomScrollbar -->
  <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
  <!-- <script src="https://cdn.jsdelivr.net/npm/malihu-custom-scrollbar-plugin@3.1.5/jquery.mCustomScrollbar.concat.min.js" integrity="sha256-WrXxn5vUpN3PFCNfwWhO7+fPv7wz8KH85mGxPeQwkr4=" crossorigin="anonymous"></script> -->
  <!-- Font Awesome -->
  <script src="js/all.min.js"></script>
  <!-- <script defer src="https://use.fontawesome.com/releases/v5.6.1/js/all.js" integrity="sha384-R5JkiUweZpJjELPWqttAYmYM1P3SNEJRM6ecTQF05pFFtxmCO+Y1CiUhvuDzgSVZ" crossorigin="anonymous"></script> -->
  <!-- Sweet Alert -->
  <script src="js/sweetalert2.all.min.js"></script> 
  <!-- <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.32.4/dist/sweetalert2.all.min.js" integrity="sha256-NIm6BOZtB0qD6ycn3fvFeJPgC81Wb0AmoXaerPdyd6Q=" crossorigin="anonymous"></script> -->
  <!-- My Script -->
  <script src="js/map.js"></script>
  <script src="js/mapManagerForEvents.js"></script>
</body>
</html>