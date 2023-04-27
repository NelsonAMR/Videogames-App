function validation({ name, image, description, rating, released }) {
  const errors = {};
  const regexImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/gi;
  const regexDate = /^(\d{4})(-|\/)(\d{2})(-|\/)(\d{2})$/;

  if (name) {
    if (name.trim().length <= 2) {
      errors.name = "El nombre es demasiado corto";
    } else if (name.trim().length > 100) {
      errors.name = "El nombre es demasiado largo";
    }
  }

  if (image) {
    if (!regexImage.test(image)) {
      errors.image = "No es una url de imagen valida";
    }
  }

  if (rating) {
    if (rating > 100) {
      errors.rating = "El rating no puede ser mayor a 100";
    } else if (rating < 0) {
      errors.rating = "El rating no puede ser menor a 0";
    }
  }

  if (released) {
    if (!regexDate.test(released)) {
      console.log(released);
      errors.released = "No es un formato de fecha valido";
    }
  }

  if (description) {
    if (description.trim().length < 50) {
      errors.description = "Debe tener al menos 50 caracteres";
    } else if (description.trim().length > 1000) {
      errors.description = "La descrion es demasiado larga";
    }
  }

  return errors;
}

function stateValidation(genreState, platformState) {
  const errors = {};

  if (platformState.length < 1) {
    errors.platforms = "Debes añadir almenos una plataforma";
  } else if (platformState.length > 12) {
    errors.platforms = "No se pueden agregar mas de 12 plataformas";
  } else {
    errors.platforms = null;
  }

  if (genreState.length < 1) {
    errors.genres = "Debes añadir almenos un genero";
  } else if (genreState.length > 6) {
    errors.genres = "No se pueden agregar mas de 6 generos";
  } else {
    errors.genres = null;
  }

  return errors;
}

export { validation, stateValidation };
