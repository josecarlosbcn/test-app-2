/**
 * Variables de entorno tipadas para usar en la aplicación
 */
export const env = {
    /**
     * URL base de la API
     */
    apiUrl: import.meta.env.VITE_API_URL as string,
    
    /**
     * URL base del servidor de imágenes
     */
    imageServer: import.meta.env.VITE_IMAGE_SERVER as string,
    
    /**
     * Indicador de modo debug
     */
    debug: import.meta.env.VITE_DEBUG === "true",
    
    /**
     * Modo de entorno actual
     */
    mode: import.meta.env.MODE as string,
    
    /**
     * Verifica si estamos en modo producción
     */
    isProd: import.meta.env.PROD as boolean,
    
    /**
     * Verifica si estamos en modo desarrollo
     */
    isDev: import.meta.env.DEV as boolean,
  };
  