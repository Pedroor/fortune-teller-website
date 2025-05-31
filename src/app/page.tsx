import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Eye, 
  Sparkles, 
  Moon, 
  Star, 
  Flame,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Play,
  Heart,
  DollarSign,
  Users,
  Shield
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Alert Banner */}
      <div className="pt-16 bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center">
            <p className="text-lg md:text-xl font-medium text-primary">
              ⚠️ E se o que te impede de ser feliz estiver mais perto do que você imagina? Eu te ajudo a enxergar!
            </p>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        
        {/* Floating mystical elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full flicker" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full flicker" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full flicker" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary rounded-full flicker" style={{animationDelay: '0.5s'}} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Mãe Amanda Cartomante
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              TRANSFORMO VIDAS
              <br />
              <span >ATRAVÉS DE MAGIA</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Descubra os segredos que o universo tem para você. Com sabedoria ancestral e 
              conexão espiritual, revelo o que está oculto e transformo destinos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WhatsAppButton size="lg" className="text-lg px-8 py-6">
                Marcar Consulta no WhatsApp
              </WhatsAppButton>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
                <Play className="w-5 h-5 mr-2" />
                Ver Apresentação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Conheça a <span className="text-primary">Mãe Amanda</span>
            </h2>
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-background rounded-lg flex items-center justify-center mb-8">
              <div className="text-center">
                <Play className="w-24 h-24 text-primary mx-auto mb-4 mystical-glow cursor-pointer hover:scale-110 transition-transform" />
                <p className="text-lg font-medium text-muted-foreground">
                  Vídeo de Apresentação
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Descubra como funciona o atendimento e como posso te ajudar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Part - Revelations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Nem tudo é o que <span className="text-primary">parece...</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">e o que você sente tem um motivo.</strong>
              </p>
              <p>
                Eu vou te conduzir por um caminho de revelações.<br />
                Seu passado fala, seu presente clama, e o futuro… já está se desenhando.
              </p>
              <p className="text-primary font-semibold">
                Você está pronto(a) para descobrir o que os olhos não veem, mas a alma sente?
              </p>
              <p>
                As respostas estão aqui — e a transformação começa quando você decide enxergar.
              </p>
              <div className="bg-primary/10 p-8 rounded-lg border border-primary/20 my-8">
                <p className="text-xl font-bold text-primary mb-4">
                  Chega de viver no escuro.
                </p>
                <p>
                  Com uma única consulta, você pode dar o primeiro passo rumo a uma vida mais leve, próspera e feliz.
                </p>
                <p className="mt-4 font-semibold text-foreground">
                  Já funcionou com muitos. Agora é a sua vez.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Part - Baralho Cigano Explanation */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Como funciona o atendimento com o <span className="text-primary">Baralho Cigano?</span>
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
      </section>

      {/* Services Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Métodos de <span className="text-primary">Consulta</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diferentes ferramentas espirituais para diferentes necessidades da sua alma
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-primary/20 hover:border-primary/50 text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Baralho Cigano</CardTitle>
                <CardDescription className="text-center">
                  É possível entender situações do passado, clarear o presente e identificar as possibilidades do futuro.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-primary/20 hover:border-primary/50 text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Eye className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Tarot</CardTitle>
                <CardDescription className="text-center">
                  Revela mensagens do inconsciente, mostra caminhos, bloqueios e possibilidades futuras. Ideal para clareza sobre decisões, relacionamentos e carreira.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-primary/20 hover:border-primary/50 text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Oráculo de Ossos</CardTitle>
                <CardDescription className="text-center">
                  É possível receber mensagens dos guias, entender questões profundas da alma, identificar bloqueios e revelar caminhos para cura, proteção e transformação.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-primary/20 hover:border-primary/50 text-center">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Moon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Búzios</CardTitle>
                <CardDescription className="text-center">
                  A leitura dos búzios é um oráculo sagrado de origem africana, usado para se comunicar com os Orixás.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-card/50">
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
      <section className="py-20">
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

      {/* Pricing Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-primary">Valores</span> das Consultas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Consulta Online</CardTitle>
                  <div className="text-4xl font-bold text-primary my-4">R$ 150</div>
                  <CardDescription>
                    Atendimento completo via videochamada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span>1 hora de consulta</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span>Análise completa da vida</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span>Orientações espirituais</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span>Indicação de rituais se necessário</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Consulta Presencial</CardTitle>
                  <div className="text-4xl font-bold text-primary my-4">R$ 200</div>
                  <CardDescription>
                    Atendimento presencial no consultório
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span>1 hora de consulta</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span>Análise completa da vida</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span>Energia presencial mais intensa</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span>Trabalhos espirituais no local</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Mãe Amanda */}
      <section className="py-20">
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
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-background rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-6xl">👩🏽‍🦱</span>
                    </div>
                    <p className="text-lg font-medium text-muted-foreground italic">
                      &quot;Foto da Mãe Amanda&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card/50">
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

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>maeamanda@cartomante.com.br</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>São Paulo - SP (Consultas presenciais)</span>
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

              <div className="space-y-6">
                <WhatsAppButton size="lg" className="w-full text-lg py-6">
                  Agendar pelo WhatsApp
                </WhatsAppButton>
                <Button variant="outline" size="lg" className="w-full text-lg py-6 border-primary/50">
                  <Calendar className="w-5 h-5 mr-2" />
                  Consulta de Emergência
                </Button>
                
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
            </div>
          </div>
        </div>
      </section>

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
                <div>Tarot</div>
                <div>Oráculo de Ossos</div>
                <div>Búzios</div>
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
              </div>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Mãe Amanda Cartomante. Todos os direitos reservados. | Transformando vidas através da magia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
