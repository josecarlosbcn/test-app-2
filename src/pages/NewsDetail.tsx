
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Newspaper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { newsItems } from "../data/newsItems";

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsItems.find((item) => item.id === Number(id));

  if (!newsItem) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Noticia no encontrada</h1>
        <p className="mb-6">Lo sentimos, la noticia que buscas no está disponible.</p>
        <Link to="/novedades">
          <Button>Volver a Novedades</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <Link to="/novedades" className="inline-flex items-center text-scienceBlue hover:underline mb-8">
        <ArrowLeft size={18} className="mr-1" />
        Volver a novedades
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="glass-panel p-6 mb-8">
          <div className="flex items-center gap-2 text-scienceBlue mb-4">
            <Calendar size={20} />
            <span>{newsItem.date}</span>
            <Newspaper size={20} className="ml-4" />
            <span>Noticia</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-6">{newsItem.title}</h1>
          
          <div className="border-l-4 border-scienceBlue pl-4 mb-8 italic">
            {newsItem.summary}
          </div>
          
          <CardContent className="p-0">
            <p className="text-muted-foreground mb-4">{newsItem.content}</p>
            <p className="text-muted-foreground mb-4">
                {newsItem.text}
            </p>
            <p className="text-muted-foreground">
                <img 
                    src= {newsItem.img} 
                    alt= {newsItem.alt}
                />
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default NewsDetail;
