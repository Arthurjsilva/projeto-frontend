import axios from "axios";
import React from 'react';

const EMPREGADOS_API_BASE_URL = "http://localhost:3000/api/cadastros";

class UsuarioService{
    createUsuario(usuario){
        return axios.post(EMPREGADOS_API_BASE_URL, usuario);
    }
}

export default new UsuarioService()