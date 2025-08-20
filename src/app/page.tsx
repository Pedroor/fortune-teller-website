"use client"
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Eye, 
  Sparkles, 
  Star, 
  Flame,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  Shield,
  MessageCircle,
  Droplets,
  Search,
  Instagram
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen mystical-gradient">
      <Navigation />
      
            {/* Alert Banner */}
      {/* <div className="pt-16 light-gold-bg border-b mystical-border">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center">
            <p className="text-lg md:text-xl font-medium high-contrast-text">
              ⚠️ E se o que te impede de ser feliz estiver mais perto do que você imagina? Eu te ajudo a enxergar!
            </p>
          </div>
        </div>
      </div> */}
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg pt-16 sm:pt-20 md:pt-24">
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/Pai Paulo de Ayra (50).jpg')",
              backgroundPosition: 'center top'
            }}
          />
        </div>
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 mystical-gradient opacity-60" />
        
        {/* Floating mystical elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full flicker glow-shadow" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full sparkle" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full float" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary rounded-full flicker" style={{animationDelay: '0.5s'}} />
          <div className="absolute top-3/4 left-1/5 w-1 h-1 bg-primary rounded-full sparkle" style={{animationDelay: '3s'}} />
          <div className="absolute top-1/5 right-1/5 w-1.5 h-1.5 bg-primary rounded-full float" style={{animationDelay: '1.5s'}} />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen py-16 sm:py-20">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left fade-in-up order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 mystical-text leading-tight">
                TRANSFORMO VIDAS
                <br />
                <span className="golden-text">ATRAVÉS DE MAGIA</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Descubra os segredos que o universo tem para você. Com sabedoria ancestral e 
                conexão espiritual, revelo o que está oculto e transformo destinos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <WhatsAppButton 
                  size="lg" 
                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 mystical-shadow hover-lift hover-glow"
                  message="Olá! Gostaria de marcar uma consulta espiritual completa. Pode me ajudar com mais informações sobre horários e valores?"
            
                >
                  Marcar Consulta no WhatsApp
                </WhatsAppButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Video Section
      <section className="py-20 card-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 golden-text-readable">
              Conheça a <span className="mystical-text">Mãe Amanda</span>
            </h2>
            <div className="aspect-video golden-gradient rounded-lg flex items-center justify-center mb-8 mystical-shadow hover-lift">
              <div className="text-center">
                <Play className="w-24 h-24 text-white mx-auto mb-4 mystical-glow cursor-pointer hover:scale-110 transition-transform float" />
                <p className="text-lg font-medium white-text-elegant">
                  Vídeo de Apresentação
                </p>
                <p className="text-sm white-text-elegant opacity-90 mt-2">
                  Descubra como funciona o atendimento e como posso te ajudar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* About Mãe Amanda */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Quem é <span className="text-primary">Mãe Amanda</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Sou <strong className="text-primary">Mãe Amanda Cartomante</strong>, Mãe de Santo, Mameto de Quimbanda, Juremeira e guardiã dos mistérios que unem o visível ao invisível.
                  </p>
                  <p>
                    Com sabedoria ancestral e responsabilidade espiritual, sou especialista em amarração amorosa, abertura de caminhos e jogos de cartas, auxiliando quem busca respostas, direção e transformação.
                  </p>
                  <p className="text-foreground font-semibold">
                    Se você precisa de ajuda no amor, na vida financeira ou espiritual, estou aqui para orientar com respeito, sigilo e firmeza.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-background rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/Pai Paulo de Ayra (49).jpg"
                    alt="Pai Paulo de Ayra"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Part - Baralho Cigano Explanation */}
      {/* <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center golden-text-readable">
              Como funciona o atendimento com o <span className="mystical-text">Baralho Cigano?</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                O baralho cigano é uma poderosa ferramenta espiritual que permite acessar informações do seu campo energético e revelar com clareza situações do passado, presente e tendências do futuro. Ele mostra o que está oculto, o que precisa ser resolvido e, principalmente, o caminho para transformar sua realidade.
              </p>
              
              <p>
                Através da consultoria espiritual sistêmica, vamos além da leitura comum de cartas. Aqui, o baralho é usado como um instrumento de orientação e cura, alinhado a técnicas espirituais e energéticas que atuam diretamente na raiz dos seus problemas.
              </p>
              
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Durante a consulta, você pode trazer qualquer tipo de questão:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Problemas amorosos, traições, términos, frieza sexual ou dificuldades para atrair alguém;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <DollarSign className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Bloqueios financeiros, dívidas, estagnação profissional ou crises em negócios e empresas;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Conflitos familiares, vícios, dúvidas existenciais ou sensação de estar &quot;perdido(a)&quot;;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Eye className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Ou simplesmente o desejo de entender melhor sua jornada e ter mais clareza sobre o que está por vir.</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-center text-xl font-semibold text-primary">
                O baralho não prevê apenas — ele orienta. Ele aponta o que precisa ser olhado, transformado e resolvido.
              </p>
              
              <p>
                Além da leitura, quando necessário, indicamos rituais, banhos, firmezas ou tratamentos espirituais que ajudam a equilibrar seus caminhos e abrir novas possibilidades.
              </p>
              
              <div className="text-center bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-xl font-bold text-foreground mb-2">
                  Você não precisa carregar esse peso sozinho(a).
                </p>
                <p>
                  Com sabedoria espiritual e conexão, é possível mudar o rumo da sua história.<br />
                  <strong className="text-primary">E tudo começa com uma consulta.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Cards */}
      <section id="methods" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 golden-text-readable">
              Métodos de <span className="mystical-text">Consulta</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diferentes ferramentas espirituais para diferentes necessidades da sua alma
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover-lift mystical-shadow hover-glow transition-all duration-300 mystical-border text-center card-gradient">
              <CardHeader>
                <div className="mx-auto w-20 h-20 golden-gradient rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform float">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl golden-text-medium">Baralho Cigano</CardTitle>
                <CardDescription className="text-center">
                  É possível entender situações do passado, clarear o presente e identificar as possibilidades do futuro.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover-lift mystical-shadow hover-glow transition-all duration-300 mystical-border text-center card-gradient">
              <CardHeader>
                <div className="mx-auto w-20 h-20 golden-gradient rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform float" style={{animationDelay: '1s'}}>
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl golden-text-medium">Oráculo de Ossos</CardTitle>
                <CardDescription className="text-center">
                  É possível receber mensagens dos guias, entender questões profundas da alma, identificar bloqueios e revelar caminhos para cura, proteção e transformação.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover-lift mystical-shadow hover-glow transition-all duration-300 mystical-border text-center card-gradient">
              <CardHeader>
                <div className="mx-auto w-20 h-20 golden-gradient rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform float" style={{animationDelay: '1.5s'}}>
                  <Flame className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl golden-text-medium">Jogo de Exu</CardTitle>
                <CardDescription className="text-center">
                  Comunicação direta com Exu, entidade poderosa que abre caminhos e remove obstáculos da sua vida.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Como <span className="text-primary">Funciona</span>
            </h2>
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-8">
                <div className="flex items-center justify-center mb-6">
                  <Clock className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Consulta Online ou Presencial</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  <strong>1 hora com agendamento</strong>, onde é feita toda análise da sua vida.
                </p>
                <p className="text-muted-foreground">
                  Atendimento completo e personalizado para suas necessidades específicas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que dizem sobre <span className="text-primary">Mãe Amanda</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vidas transformadas através da sabedoria espiritual
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &quot;Mãe Amanda mudou minha vida completamente. Suas orientações foram certeiras e hoje vivo uma realidade que nem imaginava ser possível.&quot;
                </p>
                <div className="font-semibold">— Maria S.</div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &quot;Estava perdido financeiramente e emocionalmente. Após a consulta, tudo começou a se alinhar. Gratidão eterna!&quot;
                </p>
                <div className="font-semibold">— João P.</div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &quot;A precisão das informações me impressionou. Mãe Amanda tem um dom verdadeiro e uma energia incrível.&quot;
                </p>
                <div className="font-semibold">— Ana L.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-primary">Serviços</span> e Valores
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Consulta Completa */}
              <Card className="mystical-border hover-lift mystical-shadow hover-glow transition-all card-gradient h-full flex flex-col">
                <CardHeader className="text-center flex-shrink-0">
                  <div className="mx-auto w-16 h-16 golden-gradient rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl golden-text-medium">Consulta Completa</CardTitle>
                  <CardDescription>
                    Vídeo chamada ou presencial
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="text-3xl font-bold mystical-text">R$ 277,00</div>
                    <div className="text-sm text-muted-foreground line-through">De R$ 333,00</div>
                  </div>
                  <WhatsAppButton 
                    size="sm" 
                    className="w-full py-3 text-base"
                    message="Olá! Gostaria de agendar uma consulta completa por R$ 277,00. Pode me ajudar com o agendamento?"
                    scrollTo="contact"
                  >
                    Agendar Consulta
                  </WhatsAppButton>
                </CardContent>
              </Card>

              {/* Consulta com 4 Perguntas */}
              <Card className="mystical-border hover-lift mystical-shadow hover-glow transition-all card-gradient h-full flex flex-col">
                <CardHeader className="text-center flex-shrink-0">
                  <div className="mx-auto w-16 h-16 golden-gradient rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl golden-text-medium">4 Perguntas Objetivas</CardTitle>
                  <CardDescription>
                    Respostas diretas e claras
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="text-3xl font-bold mystical-text">R$ 100,00</div>
                    <div className="text-sm text-muted-foreground line-through">De R$ 130,00</div>
                  </div>
                  <WhatsAppButton 
                    size="sm" 
                    className="w-full py-3 text-base"
                    message="Olá! Gostaria de fazer 4 perguntas objetivas por R$ 100,00. Pode me ajudar com isso?"
                    scrollTo="contact"
                  >
                    Fazer Perguntas
                  </WhatsAppButton>
                </CardContent>
              </Card>

              {/* Vela de Pedido */}
              <Card className="mystical-border hover-lift mystical-shadow hover-glow transition-all card-gradient h-full flex flex-col">
                <CardHeader className="text-center flex-shrink-0">
                  <div className="mx-auto w-16 h-16 golden-gradient rounded-full flex items-center justify-center mb-4">
                    <Flame className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl golden-text-medium">Vela de Pedido</CardTitle>
                  <CardDescription>
                    Ritual personalizado com vela
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="text-3xl font-bold mystical-text">R$ 97,00</div>
                    <div className="text-sm text-muted-foreground line-through">De R$ 137,00</div>
                  </div>
                  <WhatsAppButton 
                    size="sm" 
                    className="w-full py-3 text-base"
                    message="Olá! Gostaria de solicitar uma vela de pedido personalizada por R$ 97,00. Pode me ajudar com isso?"
                    scrollTo="contact"
                  >
                    Solicitar Vela
                  </WhatsAppButton>
                </CardContent>
              </Card>

                {/* Ritual Amoroso */}
                <Card className="mystical-border hover-lift mystical-shadow hover-glow transition-all card-gradient h-full flex flex-col">
                <CardHeader className="text-center flex-shrink-0">
                  <div className="mx-auto w-16 h-16 golden-gradient rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl golden-text-medium">Ritual de Prosperidade</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="text-3xl font-bold mystical-text">R$ 197,00</div>
                    <div className="text-sm text-muted-foreground line-through">De R$ 277,00</div>
                  </div>
                  <WhatsAppButton 
                    size="sm" 
                    className="w-full py-3 text-base"
                    message="Olá! Gostaria de solicitar um ritual de prosperidade por R$ 197,00. Pode me ajudar com isso?"
                    scrollTo="contact"
                  >
                    Solicitar Ritual
                  </WhatsAppButton>
                </CardContent>
              </Card>

              {/* Ritual Amoroso */}
              <Card className="mystical-border hover-lift mystical-shadow hover-glow transition-all card-gradient h-full flex flex-col">
                <CardHeader className="text-center flex-shrink-0">
                  <div className="mx-auto w-16 h-16 golden-gradient rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl golden-text-medium">Ritual Amoroso</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="text-3xl font-bold mystical-text">R$ 197,00</div>
                    <div className="text-sm text-muted-foreground line-through">De R$ 277,00</div>
                  </div>
                  <WhatsAppButton 
                    size="sm" 
                    className="w-full py-3 text-base"
                    message="Olá! Gostaria de solicitar um ritual amoroso por R$ 197,00. Pode me ajudar com isso?"
                    scrollTo="contact"
                  >
                    Solicitar Ritual
                  </WhatsAppButton>
                </CardContent>
              </Card>

                {/* Banhos Energéticos */}
                <Card className="mystical-border hover-lift mystical-shadow hover-glow transition-all card-gradient h-full flex flex-col">
                <CardHeader className="text-center flex-shrink-0">
                  <div className="mx-auto w-16 h-16 golden-gradient rounded-full flex items-center justify-center mb-4">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl golden-text-medium">Banhos Energético de Limpeza Espiritual</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow flex flex-col justify-between">
                  <div className="mb-4">
           
                    <div className="text-3xl font-bold mystical-text">R$ 157,00</div>
                    <div className="text-sm text-muted-foreground line-through">De R$ 197,00</div>
                  
                  </div>
                  <WhatsAppButton 
                    size="sm" 
                    className="w-full py-3 text-base"
                    message="Olá! Gostaria de solicitar um banho energético de limpeza espiritual por R$ 157,00. Pode me ajudar com isso?"
                    scrollTo="contact"
                  >
                    Solicitar Banho
                  </WhatsAppButton>
                </CardContent>
              </Card>

              {/* Banhos Energéticos */}
              <Card className="mystical-border hover-lift mystical-shadow hover-glow transition-all card-gradient h-full flex flex-col">
                <CardHeader className="text-center flex-shrink-0">
                  <div className="mx-auto w-16 h-16 golden-gradient rounded-full flex items-center justify-center mb-4">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl golden-text-medium">Banhos Energético de Amor</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow flex flex-col justify-between">
                  <div className="mb-4">
           
                    <div className="text-3xl font-bold mystical-text">R$ 157,00</div>
                    <div className="text-sm text-muted-foreground line-through">De R$ 197,00</div>
                  
                  </div>
                  <WhatsAppButton 
                    size="sm" 
                    className="w-full py-3 text-base"
                    message="Olá! Gostaria de solicitar um banho energético de amor por R$ 157,00. Pode me ajudar com isso?"
                    scrollTo="contact"
                  >
                    Solicitar Banho
                  </WhatsAppButton>
                </CardContent>
              </Card>

                 {/* Banhos Energéticos */}
                 <Card className="mystical-border hover-lift mystical-shadow hover-glow transition-all card-gradient h-full flex flex-col">
                <CardHeader className="text-center flex-shrink-0">
                  <div className="mx-auto w-16 h-16 golden-gradient rounded-full flex items-center justify-center mb-4">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl golden-text-medium">Banho Energético de Prosperidade</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="text-3xl font-bold mystical-text">R$ 157,00</div>
                    <div className="text-sm text-muted-foreground line-through">De R$ 197,00</div>
                  
                  </div>
                  <WhatsAppButton 
                    size="sm" 
                    className="w-full py-3 text-base"
                    message="Olá! Gostaria de solicitar um banho energético de prosperidade por R$ 157,00. Pode me ajudar com isso?"
                    scrollTo="contact"
                  >
                    Solicitar Banho
                  </WhatsAppButton>
                </CardContent>
              </Card>

              {/* Avaliação Trabalho Espiritual */}
              <Card className="mystical-border hover-lift mystical-shadow hover-glow transition-all card-gradient h-full flex flex-col">
                <CardHeader className="text-center flex-shrink-0">
                  <div className="mx-auto w-16 h-16 golden-gradient rounded-full flex items-center justify-center mb-4">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl golden-text-medium">Avaliação Espiritual</CardTitle>
                  <CardDescription>
                    Para Trabalho Espiritual
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="text-3xl font-bold mystical-text">R$ 50,00</div>
                    <div className="text-sm text-muted-foreground line-through">De R$ 100,00</div>
                  </div>
                  <WhatsAppButton 
                    size="sm" 
                    className="w-full py-3 text-base"
                    message="Olá! Gostaria de solicitar uma avaliação espiritual para trabalho espiritual por R$ 50,00. Pode me ajudar com isso?"
                    scrollTo="contact"
                  >
                    Solicitar Avaliação
                  </WhatsAppButton>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Marque sua <span className="text-primary">Consulta</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Sua transformação está a um clique de distância
              </p>
            </div>
            <div className="space-y-6 flex flex-col h-full">
                <WhatsAppButton 
                  size="lg" 
                  className="w-full text-lg py-6"
                  message="Olá! Gostaria de agendar uma consulta pelo WhatsApp. Pode me ajudar com horários disponíveis?"
                  scrollTo="contact"
                >
                  Agendar pelo WhatsApp
                </WhatsAppButton>
                <WhatsAppButton 
                  variant="outline" 
                  size="lg" 
                  className="w-full text-lg py-6 border-primary/50"
                  message="Olá! Preciso de uma consulta de emergência. Pode me atender o quanto antes?"
                  scrollTo="contact"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Consulta de Emergência
                </WhatsAppButton>
                
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2 text-primary">Importante</h4>
                    <p className="text-sm text-muted-foreground">
                      Todas as consultas são realizadas com total sigilo e respeito. 
                      Prepare-se para receber orientações que podem transformar sua vida.
                    </p>
                  </CardContent>
                </Card>
              </div>
            <div className="grid pt-12 gap-12 items-start">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                <div className="space-y-4 mb-8">
                  <div 
                    onClick={() => {
                      const phoneNumber = "85992117815";
                      const message = "Olá! Gostaria de entrar em contato pelo telefone (85) 99211-7815. Pode me ajudar?";
                      const encodedMessage = encodeURIComponent(message);
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="flex items-center justify-start space-x-3 p-3 w-full border border-primary/20 bg-primary/5 rounded-lg cursor-pointer"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <span>(85) 99211-7815</span>
                  </div>
                  <div 
                    onClick={() => {
                      const phoneNumber = "85992117815";
                      const message = "Olá! Gostaria de entrar em contato por email. Pode me passar mais informações?";
                      const encodedMessage = encodeURIComponent(message);
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="flex items-center justify-start space-x-3 p-3 w-full border border-primary/20 bg-primary/5 rounded-lg cursor-pointer"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <span>Contato por email</span>
                  </div>
                  <div 
                    onClick={() => {
                      const phoneNumber = "85992117815";
                      const message = "Olá! Gostaria de agendar uma consulta presencial em Fortaleza - CE. Pode me ajudar?";
                      const encodedMessage = encodeURIComponent(message);
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="flex items-center justify-start space-x-3 p-3 w-full border border-primary/20 bg-primary/5 rounded-lg cursor-pointer"
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Fortaleza - CE (Consultas presenciais)</span>
                  </div>
                  <div 
                    onClick={() => {
                      window.open('https://www.instagram.com/amandahcartomante/', '_blank');
                    }}
                    className="flex items-center justify-start space-x-3 p-3 w-full border border-primary/20 bg-primary/5 rounded-lg cursor-pointer"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                    <span>@amandahcartomante</span>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Horários de Atendimento
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Segunda a Sexta</span>
                      <span>9h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado</span>
                      <span>9h às 15h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo</span>
                      <span>Fechado</span>
                    </div>
                  </div>
                </div>
              </div>

           
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8 z-[9996]">
        <Button
          onClick={() => {
            document.getElementById('hero')?.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }}
          className="w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-300 mystical-glow"
          size="icon"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Flame className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Mãe Amanda</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transformando vidas através da sabedoria ancestral e conexão espiritual.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Baralho Cigano</div>

                <div>Oráculo de Ossos</div>
                <div>Jogo de Exu</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Sobre</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Mãe Amanda</div>
                <div>Depoimentos</div>
                <div>Como Funciona</div>
                <div>Valores</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>WhatsApp</div>
                <div>Agendamento</div>
                <div>Localização</div>
                <div>Horários</div>
                <a 
                  href="https://www.instagram.com/amandahcartomante/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Mãe Amanda Cartomante. Todos os direitos reservados. | Transformando vidas através da magia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
