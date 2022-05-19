import { Injectable } from '@angular/core';
import { Firestore, collectionData, doc, docData, docSnapshots } from '@angular/fire/firestore';
import { Observable } from '@firebase/util';
import { addDoc, collection, DocumentReference, getDoc, updateDoc } from 'firebase/firestore';

export interface Usuario {
  id?: string;
  correo: string;
  contrasena: string;
  numeroCedula: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  fechaNacimiento: string;
  edad: number;
  vacunacion: number;
  deleted: boolean;
}

export interface Pelicula {
  id?: string;
  actores: Array<string>;
  deleted: boolean;
  director: string;
  duracion: string;
  edad_min: number;
  generos: Array<string>;
  idiomas: Array<string>;
  precio_adultomayor: string;
  precio_nino: string;
  precio_normal: string;
  Hora: string;
  Sala: string;
  salaFlag: boolean;
  titulo: string;
  url: string;
}

export interface Comida {
  id?: string;
  cantidad: number;
  deleted: boolean;
  nombre: string;
  precio: number;
  tipo: string;
  url: string;
}

export interface Sala {
  id?: string;
  cantidad_asientos: any;
  deleted: boolean;
  hora: string;
  nombre: string;
  pelicula: string;
  asientos: Array<any>;
}

export interface Carrito {
  id?: string;
  sala01: Array<any>;
  sala02: Array<any>;
  sala03: Array<any>;
  comidas: Array<any>;
  //usuario: any;
}

export interface Administrador {
  id?: string;
  correo: string;
  contrasena: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  adminLocal: any;
  usuarioLocal: any;
  peliculaLocal: any;
  comidasGeneral: any;
  comidaLocal: any;
  comidaFiltrada: Array<any> = [];
  salaLocal: any;
  carritoLocal: any;

  constructor(private firestore: Firestore) { }

  getAdmins(): Observable<Administrador[]>{
    const adminsRef = collection(this.firestore, 'administradores');
    return collectionData(adminsRef, { idField: 'id' }) as unknown as Observable<Administrador[]>;
  }

  setAdminLocal(admin: Administrador) {
    this.adminLocal = admin;
  }

  getAdminLocal() {
    return this.adminLocal;
  }

  getUsuarios(): Observable<Usuario[]>{
    const usuariosRef = collection(this.firestore, 'usuarios');
    return collectionData(usuariosRef, { idField: 'id' }) as unknown as Observable<Usuario[]>;
  }

  getUsuario(correo: any, password: any): Observable<Usuario> {
    const usuarioRef = doc(this.firestore, `usuarios/${correo}`);
    return docData(usuarioRef, { idField: 'id' }) as unknown as Observable<Usuario>;  
  }

  addUsuario(usuario: Usuario) {
    const usuariosRef = collection(this.firestore, 'usuarios');
    return addDoc(usuariosRef, usuario);
  }

  deleteCliente(usuario: Usuario){
    const usuariosRef = doc(this.firestore, `usuarios/${usuario.id}`);
    return updateDoc(usuariosRef, {deleted: true});
  }
  
  updateUsuario(usuario: Usuario){
    const usuariosRef = doc(this.firestore, `usuarios/${usuario.id}`);
    return updateDoc(usuariosRef, {
      correo: usuario.correo,
      contrasena: usuario.contrasena,
      numeroCedula: usuario.numeroCedula,
      nombre: usuario.nombre,
      apellido1: usuario.apellido1,
      apellido2: usuario.apellido2,
      fechaNacimiento: usuario.fechaNacimiento,
      edad: usuario.edad,
      vacunacion: usuario.vacunacion,
      deleted: usuario.deleted});
  }

  setUsuarioLocal(usuario: Usuario) {
    this.usuarioLocal = usuario;
  }

  getUsuarioLocal() {
    return this.usuarioLocal;
  }

  getPeliculas(): Observable<Pelicula[]>{
    const peliculasRef = collection(this.firestore, 'peliculas');
    return collectionData(peliculasRef, { idField: 'id'}) as unknown as Observable<Pelicula[]>;
  }

  addPelicula(pelicula: Pelicula) {
    const peliculasRef = collection(this.firestore, 'peliculas');
    return addDoc(peliculasRef, pelicula);
  }

  setPeliculaLocal(pelicula: Pelicula) {
    this.peliculaLocal = pelicula;
  }

  getPeliculaLocal() {
    return this.peliculaLocal;
  }

  updatePelicula(pelicula: Pelicula){  
    const peliculaDocRef = doc(this.firestore, `peliculas/${pelicula.id}`);
    return updateDoc(peliculaDocRef, {
      id: pelicula.id,
      actores: pelicula.actores,
      deleted: pelicula.deleted,
      director: pelicula.director,
      duracion: pelicula.duracion,
      edad_min: pelicula.edad_min,
      generos: pelicula.generos,
      idiomas: pelicula.idiomas,
      precio_adultomayor: pelicula.precio_adultomayor,
      precio_nino: pelicula.precio_nino,
      precio_normal: pelicula.precio_normal,
      Sala: pelicula.Sala,
      Hora: pelicula.Hora,
      salaFlag: pelicula.salaFlag,
      titulo: pelicula.titulo,
      url: pelicula.url
    });
  }

  updatePeliculaSinActores(pelicula: Pelicula){
    const peliculaDocRef = doc(this.firestore, `peliculas/${pelicula.id}`);
    return updateDoc(peliculaDocRef, {
      id: pelicula.id,
      deleted: pelicula.deleted,
      director: pelicula.director,
      duracion: pelicula.duracion,
      edad_min: pelicula.edad_min,
      generos: pelicula.generos,
      idiomas: pelicula.idiomas,
      precio_adultomayor: pelicula.precio_adultomayor,
      precio_nino: pelicula.precio_nino,
      precio_normal: pelicula.precio_normal,
      Sala: pelicula.Sala,
      Hora: pelicula.Hora,
      salaFlag: pelicula.salaFlag,
      titulo: pelicula.titulo,
      url: pelicula.url
    });
  }

  deletePelicula(pelicula: Pelicula){
    const peliculaDocRef = doc(this.firestore, `peliculas/${pelicula.id}`);
    return updateDoc(peliculaDocRef, {deleted: true});
  }

  getComidas(): Observable<Comida[]>{
    const comidasRef = collection(this.firestore, 'comidas');
    return collectionData(comidasRef, { idField: 'id'}) as unknown as Observable<Comida[]>;
  }

  addComida(comida: Comida) {
    const comidasRef = collection(this.firestore, 'comidas');
    return addDoc(comidasRef, comida);
  }

  setComidaGeneral(comidas: any) {
    this.comidasGeneral = comidas;
  }
  
  setComidaLocal(comida: Comida) {
    this.comidaLocal = comida;
  }

  getComidaLocal() {
    return this.comidaLocal;
  }

  setComidaFiltrada(comida: Comida, comidasFlag: boolean, bebidasFlag: boolean, combosFlag: boolean) {

    this.comidaFiltrada = [];

    if(comidasFlag==true){
      for(let item of this.comidasGeneral){
        if(item.tipo == "comida"){
          this.comidaFiltrada.push(item);
        }
      }
    }

    if(bebidasFlag==true){
      for(let item of this.comidasGeneral){
        if(item.tipo == "bebida"){
          this.comidaFiltrada.push(item);
        }
      }
    }

    if(combosFlag==true){
      for(let item of this.comidasGeneral){
        if(item.tipo == "combo"){
          this.comidaFiltrada.push(item);
        }
      }
    }
  }

  getComidaFiltrada() {
    return this.comidaFiltrada;
  }

  deleteComida(comida: Comida){
    const comidaDocRef = doc(this.firestore, `comidas/${comida.id}`);
    return updateDoc(comidaDocRef, {deleted: true});
  }


  updateComida(comida: Comida){  
    const comidaDocRef = doc(this.firestore, `comidas/${comida.id}`);
    return updateDoc(comidaDocRef, {
      id: comida.id,
      cantidad: comida.cantidad,
      deleted: comida.deleted,
      nombre: comida.nombre,
      precio: comida.precio,
      tipo: comida.tipo,
      url: comida.url
    });
  }

  getSalas(): Observable<Sala[]>{
    const salasRef = collection(this.firestore, 'salas');
    return collectionData(salasRef, { idField: 'id'}) as unknown as Observable<Sala[]>;
  }

  getSala(nombre: any): Observable<Sala> {
    const salaRef = doc(this.firestore, `salas/${nombre}`);
    return docData(salaRef, { idField: 'id' }) as unknown as Observable<Sala>;  
  }

  updateSala(sala: Sala){
    const salaDocRef = doc(this.firestore, `salas/${sala.id}`);
    return updateDoc(salaDocRef, {
      id: sala.id,
          cantidad_asientos: sala.cantidad_asientos,
          deleted: sala.deleted,
          hora: sala.hora,
          nombre: sala.nombre,
          pelicula: sala.pelicula,
          asientos: sala.asientos
    });
  }

  quitarSalaPelicula(pelicula: Pelicula){
    const peliculaDocRef = doc(this.firestore, `peliculas/${pelicula.id}`);
    return updateDoc(peliculaDocRef, {Sala: pelicula.Sala, Hora: pelicula.Hora, salaFlag: pelicula.salaFlag});
  }

  setSalaLocal(sala: Sala) {
    this.salaLocal = sala;
  }

  getSalaLocal() {
    return this.salaLocal;
  }

  createcarritoLocal(){
    this.carritoLocal = {
      sala01: [],
      sala02: [],
      sala03: [],
      comidas: [],
      usuario: ""
    }
  }

  setCarritoLocalUsuario(){
    this.carritoLocal.usuario = this.usuarioLocal.id;
  }

  setCarritoLocal(carrito: Carrito) {
    this.carritoLocal = carrito;
  }

  setSala01Carrito(json: any){
    console.log(json);
    this.carritoLocal.sala01.push(json);
  }

  setSala02Carrito(json: any){
    this.carritoLocal.sala02.push(json);
  }

  setSala03Carrito(json: any){
    this.carritoLocal.sala03.push(json);
  }

  setComidasCarrito(json: any){
    this.carritoLocal.comidas.push(json);
    console.log(this.carritoLocal);
  }

  getCarritoLocal(){
    return this.carritoLocal;
  }

  addCarrito(carrito: Carrito){
    const carritosRef = collection(this.firestore, 'carritos');
    return addDoc(carritosRef, carrito);
  }

  updateReservas(sala: Sala){  
    const salaDocRef = doc(this.firestore, `salas/${sala.id}`);
    return updateDoc(salaDocRef, {asientos: sala.asientos});
  }

  updateStock(comida: Comida){
    const comidaDocRef = doc(this.firestore, `comidas/${comida.id}`);
    return updateDoc(comidaDocRef, {cantidad: comida.cantidad})
  }


  /*
  createMatrizAsientos(sala: Sala){

    var matrizAsientos = [];

    for(let i=0; i < 100; i++){
      var asiento = {id: i, num_asiento: i+1, reservado: false, persona: ""}
      matrizAsientos.push(asiento);
    }

    const salaDocRef = doc(this.firestore, `salas/${sala.id}`);
    return updateDoc(salaDocRef, {nombre: sala.nombre, pelicula: sala.pelicula, hora: sala.hora, deleted: sala.deleted, cantidad_asientos: sala.cantidad_asientos, asientos: matrizAsientos});

    //const salasRef = collection(this.firestore, 'salas');
  }
  */
  
}



