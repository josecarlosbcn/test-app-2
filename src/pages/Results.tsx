import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Download, FileText, BarChart as BarChartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const performanceData = [
  { month: "Ene", eficiencia: 65, precisión: 75 },
  { month: "Feb", eficiencia: 68, precisión: 78 },
  { month: "Mar", eficiencia: 70, precisión: 82 },
  { month: "Abr", eficiencia: 75, precisión: 85 },
  { month: "May", eficiencia: 78, precisión: 87 },
  { month: "Jun", eficiencia: 82, precisión: 90 },
];

const comparativeData = [
  { name: "Método A", eficiencia: 62, precisión: 71 },
  { name: "Método B", eficiencia: 70, precisión: 80 },
  { name: "Nuestro Método", eficiencia: 85, precisión: 92 },
];

const Results = () => {
  const { toast } = useToast();

  const handleDownload = (documentPath: string, documentTitle: string) => {
    try {
      const link = document.createElement('a');
      link.href = documentPath;
      link.download = documentTitle;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      toast({
        title: "Error al descargar",
        description: "No se pudo descargar el documento solicitado.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="section-header">Resultados de la Investigación</h1>
        <p className="section-subheader mx-auto">
          Datos, hallazgos y conclusiones de nuestro proyecto científico
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glass-panel h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Evolución del Rendimiento</CardTitle>
                  <CardDescription>Progreso de eficiencia y precisión durante los últimos 6 meses</CardDescription>
                </div>
                <BarChartIcon className="text-scienceBlue" />
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="eficiencia" stroke="#495773" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="precisión" stroke="#c8432e" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div> */}

        {/* <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="glass-panel h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Comparativa de Métodos</CardTitle>
                  <CardDescription>Comparación de nuestro método con las técnicas convencionales</CardDescription>
                </div>
                <BarChartIcon className="text-scienceBlue" />
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={comparativeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="eficiencia" fill="#495773" />
                  <Bar dataKey="precisión" fill="#c8432e" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8"
      >
        <Card className="glass-panel">
          <CardHeader>
            <CardTitle>Publicaciones y Documentos</CardTitle>
            <CardDescription>Accede a nuestros últimos informes y publicaciones científicas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Presentación del Proyecto en T4A", date: "Enero 2025", type: "PDF", size: "2.4 MB", path: "/docs/20250123_Ppt_ReuGrupo.pdf" },
                //{ title: "Artículo: Nuevos enfoques metodológicos", date: "Febrero 2024", type: "PDF", size: "1.8 MB", path: "/docs/nuevos-enfoques-metodologicos.pdf" },
                //{ title: "Datos experimentales serie A-234", date: "Enero 2024", type: "XLSX", size: "5.2 MB", path: "/docs/datos-experimentales-a234.xlsx" },
                //{ title: "Publicación en Revista de Ciencias Aplicadas", date: "Diciembre 2023", type: "PDF", size: "3.5 MB", path: "/docs/publicacion-revista-ciencias.pdf" },
              ].map((doc, index) => (
                <div key={index} className="flex justify-between items-center p-4 rounded-lg bg-background hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="text-scienceBlue" />
                    <div>
                      <h3 className="font-medium">{doc.title}</h3>
                      <p className="text-sm text-muted-foreground">{doc.date} • {doc.type} • {doc.size}</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDownload(doc.path, doc.title)}
                  >
                    <Download size={16} className="mr-2" />
                    Descargar
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Results;
