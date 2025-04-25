
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper } from "lucide-react";
import { newsItems } from "../data/newsItems";

const News = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="section-header">Novedades</h1>  
        <p className="section-subheader mx-auto">
          Noticias y avances de nuestro proyecto de investigación
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/novedades/${item.id}`} className="block h-full">
              <Card className="glass-panel card-hover h-full transition-all duration-200 hover:shadow-lg cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 text-scienceBlue mb-2">
                    <Newspaper size={20} />
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.content}</p>
                  <p className="text-scienceBlue mt-4 text-sm font-medium">Leer más →</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default News;
