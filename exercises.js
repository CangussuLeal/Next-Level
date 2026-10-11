/* =========================================================
   CALISTENIA · MONTADOR DE TREINO + AGENDA
   Cole este código dentro de uma tag <script> antes de </body>
   ========================================================= */

/* ---------------------------------------------------------
   1) BANCO DE EXERCÍCIOS
   --------------------------------------------------------- */
/* ---------------------------------------------------------
   1) BANCO DE EXERCÍCIOS — expandido
   Fonte: Yerai Alonso & Sergio Catalán + James O'Connell
   --------------------------------------------------------- */
const EX = {

  /* ============================ PUSH ============================ */

  // -------- Nível 1 · Base --------
  'Prancha':                                  {cat:'Push', n:1, exec:'Base isométrica para todas as flexões', dicas:'Corpo reto, core contraído, escápulas empurradas para fora, respiração estável', obj:'Estabilidade e resistência do core'},
  'Flexão de escápula':                       {cat:'Push', n:1, exec:'Movimento das omoplatas sem dobrar cotovelos', dicas:'Braços retos, deprimir e protrair escápulas, pausa de 1s no topo', obj:'Fortalecer estabilizadores do ombro'},
  'Push-up negativo':                         {cat:'Push', n:1, exec:'Descida controlada (3-5s)', dicas:'Desça devagar, sem queda descontrolada, peito quase no chão', obj:'Resistência excêntrica e controle'},
  'Flexão inclinada':                         {cat:'Push', n:1, exec:'Mãos em superfície elevada', dicas:'Quanto mais alta a superfície, mais fácil. Ajusta a dificuldade para iniciantes', obj:'Introdução às flexões com menor carga'},
  'Flexão com joelhos apoiados':              {cat:'Push', n:1, exec:'Joelhos no chão, corpo reto', dicas:'Mantém a espinha reta, desça até tocar o chão com o peito, rango completo', obj:'Base para a flexão normal'},
  'Estático flexões':                         {cat:'Push', n:1, exec:'Prancha com braços estendidos', dicas:'Brazos esticados, sem dobrar a lombar nem perder o bloqueio', obj:'Estabilidade e resistência isométrica'},
  'Fondos em banco':                          {cat:'Push', n:1, exec:'Mãos no bordo de banco, costas viradas', dicas:'Ombros baixos, desça só até 90º. Ideal para quem ainda não faz fondos completos', obj:'Força básica de tríceps e peito'},

  // -------- Nível 2 · Básico --------
  'Flexão normal':                            {cat:'Push', n:2, exec:'Padrão ouro', dicas:'Mãos na largura dos ombros, cotovelos junto ao corpo, desça até 90°, gomito a gomito com o tronco', obj:'Força geral de peito, ombros e tríceps'},
  'Flexão ampla':                             {cat:'Push', n:2, exec:'Mãos mais largas que ombros', dicas:'Escápulas protraídas, ombros empurram o chão, corpo em "A"', obj:'Ênfase no peitoral e ombros'},
  'Flexão diamante':                          {cat:'Push', n:2, exec:'Mãos em forma de diamante sob o peito', dicas:'Cotovelos levemente para dentro, desça até quase tocar as mãos', obj:'Ênfase no tríceps e peitoral interno'},
  'Flexão esfinge':                           {cat:'Push', n:2, exec:'Codos no chão, mãos à frente, antebraços no chão', dicas:'Exercício de isolamento do tríceps — empurre apenas com antebraços', obj:'Isolamento do tríceps'},
  'Flexão T':                                 {cat:'Push', n:2, exec:'Flexão normal + braço estendido lateral no topo', dicas:'Alterna o braço a cada repetição, mantém o quadril estável', obj:'Introdução ao trabalho de ombro e anti-rotação'},
  'Extensão de tríceps':                      {cat:'Push', n:2, exec:'Prancha de cotovelo → estende tríceps', dicas:'Cotovelos abaixo dos ombros, empurre com antebraços e palmas', obj:'Fortalecer tríceps e preparar para OAPU'},
  'Fondos curtos':                            {cat:'Push', n:2, exec:'Fondos com rango curto', dicas:'Só desça até 45°, ideal para quem ainda não tem rango completo', obj:'Introdução aos fondos completos'},
  'Fondos':                                   {cat:'Push', n:2, exec:'Em barras paralelas, desça até 90°', dicas:'Subir até bloquear cotovelos, ombros longe das orelhas, tronco ligeiramente inclinado', obj:'Força base de empurrar — peito, tríceps, ombros'},
  'Fondos negativos com salto':               {cat:'Push', n:2, exec:'Salta para posição alta, desce devagar', dicas:'Fase excêntrica de 3-5s. Excelente para ganhar rango nos fondos', obj:'Excêntrico de fondos'},
  'Fondos espartanos':                        {cat:'Push', n:2, exec:'Um braço mais à frente que o outro', dicas:'Alterna o braço da frente em cada série', obj:'Progressão para fondos com troca'},
  'Fondos em banco a um braço':               {cat:'Push', n:2, exec:'Fondos em banco com um só braço', dicas:'Pernas abertas para equilibrar, mão livre pode apoiar na perna', obj:'Força unilateral e preparação para estáticos'},

  // -------- Nível 3 · Intermédio --------
  'Flexão explosiva':                         {cat:'Push', n:3, exec:'Empurrar o chão com força para tirar mãos do chão', dicas:'Cotovelos para dentro, aterrissagem com braços dobrados (mola)', obj:'Potência e recrutamento neuromuscular'},
  'Flexão arqueiro':                          {cat:'Push', n:3, exec:'Um braço estendido para o lado, outro flexiona', dicas:'Pés largos para iniciantes, corpo desce de lado. Rotação de mão acompanha', obj:'Força unilateral e equilíbrio'},
  'Flexão declinada':                         {cat:'Push', n:3, exec:'Pés elevados, mãos no chão', dicas:'Quanto mais elevação, mais foco nos ombros. Preparação para flexões a pino', obj:'Introdução ao trabalho de ombros e pino'},
  'Pike push-ups':                            {cat:'Push', n:3, exec:'Quadril elevado, forma de V invertido', dicas:'Mãos e pés aproximados, cabeça desce entre os braços', obj:'Força de ombro, preparação para pino'},
  'Hindu push-ups':                           {cat:'Push', n:3, exec:'Pike → descer quadril → cabeça entre braços', dicas:'Movimento contínuo, muito completo. Imagina um arco com o corpo', obj:'Força de ombro, mobilidade e fluidez'},
  'Flexão spiderman':                         {cat:'Push', n:3, exec:'Ao descer, um joelho sobe até o cotovelo do mesmo lado', dicas:'Alterna as pernas, mantém quadril baixo', obj:'Trabalho de core + empurrar'},
  'Flexão a codos':                           {cat:'Push', n:3, exec:'Ao descer, cotovelos tocam o chão', dicas:'Primeiro exercício dinâmico de empurrar. Traz recursos para freestyle', obj:'Introdução ao freestyle de flexões'},
  'Fondos inclinados':                        {cat:'Push', n:3, exec:'Fondos com cabeça à frente', dicas:'Mais trabalho de ombro. Bom para preparar pino e planche', obj:'Ênfase nos ombros'},
  'Flexão esfinge em X':                      {cat:'Push', n:3, exec:'Como esfinge, mas com as mãos cruzadas', dicas:'Foco total em tríceps. Codos alinhados com os ombros', obj:'Isolamento avançado do tríceps'},

  // -------- Nível 4 · Avançado --------
  'Flexão de um braço (OAPU)':                {cat:'Push', n:4, exec:'Uma mão no chão, outra atrás das costas ou na coxa', dicas:'Ombros nivelados, core firme, desça controlado, cotovelo próximo ao tronco', obj:'Força máxima e domínio corporal'},
  'Flexão com palmada':                       {cat:'Push', n:4, exec:'Empurrar forte e dar uma palmada no ar', dicas:'Só treina depois de dominar a explosiva. Joelhos podem flexionar para ajudar', obj:'Potência máxima de empurrar'},
  'Flexão Superman':                          {cat:'Push', n:4, exec:'Empurrar e lançar mãos e pés no ar', dicas:'Aterrissa com braços dobrados (mola). Ajuda do swing do quadril', obj:'Potência explosiva total'},
  'Flexão 360°':                              {cat:'Push', n:4, exec:'Ao subir, cruza uma perna por trás e gira 360°', dicas:'Apoia a planta do pé que cruza no chão para guiar o giro', obj:'Freestyle e agilidade'},
  'Pseudo push-ups':                          {cat:'Push', n:4, exec:'Mãos na altura do umbigo, corpo inclinado', dicas:'Muito carga no ombro. Introdução ao trabalho de planche', obj:'Preparação para planche'},
  'Fondos explosivos':                        {cat:'Push', n:4, exec:'Fondos com fase de subida explosiva', dicas:'Reduzir ao mínimo o movimento das pernas, mãos descolam das barras', obj:'Potência nos fondos'},
  'Korean dips':                              {cat:'Push', n:4, exec:'De costas para a barra, agarre prono, corpo passa por trás', dicas:'Aproveita o balanço, cotovelos altos. Excelente para back lever', obj:'Força de ombro e preparação para back lever'},
  'Flexão espartana explosiva com troca':     {cat:'Push', n:4, exec:'Espartana explosiva trocando o braço da frente', dicas:'Amplitude grande das mãos, mantém o core ativo', obj:'Potência e coordenação'},
  'Flexão com palmada entre as pernas':       {cat:'Push', n:4, exec:'Ao subir, dá palmada por baixo da perna', dicas:'Adianta e flexiona a perna que sobe, retira-a rápido para a queda ser limpa', obj:'Freestyle de flexões'},
  'Flexões a pino assistidas':                {cat:'Push', n:4, exec:'Pino contra a parede, flexiona os braços até a testa tocar o chão', dicas:'Corpo reto, core firme. Exercício base para todos os movimentos de pino e plancha', obj:'Força fundamental de ombro'},
  'Fondos a tucked planche':                  {cat:'Push', n:4, exec:'Fundo + joelhos ao peito em cima', dicas:'Sobe com quadril e joelhos até os pés passarem a altura das barras', obj:'Transição para tucked planche'},

  // -------- Nível 5 · Elite --------
  'Fondos a um braço':                        {cat:'Push', n:5, exec:'Fondos em barra com um só braço', dicas:'Começa com rango curto. Mão livre ajuda no equilíbrio', obj:'Força máxima unilateral'},
  'Fondos com palmada':                       {cat:'Push', n:5, exec:'Fondos explosivos dando palmada no ar', dicas:'Levanta joelhos ao saltar. Com o tempo reduz a ajuda', obj:'Potência elite em fondos'},
  'Fondos 180°':                              {cat:'Push', n:5, exec:'Fundo + giro 180° no ar', dicas:'Aterrissa virado para o lado contrário. Cuidado com joelhos na queda', obj:'Freestyle avançado'},
  'Flexão Superman com palmada atrás':        {cat:'Push', n:5, exec:'Superman + palmada atrás das costas', dicas:'Alonga bem o peito antes. Ajuda do swing do quadril', obj:'Freestyle de flexões'},
  'Flexão azteca':                            {cat:'Push', n:5, exec:'Superman tocando os pés com as mãos no ar', dicas:'Precisa de muita explosividade e flexibilidade. Pernas retas', obj:'Freestyle avançado'},
  'Flexão a um braço com palmada no peito':   {cat:'Push', n:5, exec:'OAPU + palmada no peito no topo', dicas:'Pernas abertas, rotação de tronco ajuda. Só treina com OAPU dominado', obj:'Elite de freestyle'},

  /* ============================ PULL ============================ */

  // -------- Nível 1 · Base --------
  'Banded overhead pull-apart':               {cat:'Pull', n:1, exec:'Aquecimento com faixa acima da cabeça', dicas:'Braços estendidos, afasta a faixa, ombros para baixo', obj:'Ativação escapular e mobilidade'},
  'Banded horizontal pull-apart':             {cat:'Pull', n:1, exec:'Aquecimento com faixa na altura do peito', dicas:'Cotovelos retos, aperta as omoplatas', obj:'Retração escapular e postura'},
  'Pull-down com faixa':                      {cat:'Pull', n:1, exec:'Faixa presa acima, puxa até o peito', dicas:'Core firme, evita balanço do tronco', obj:'Ativação de dorsais e bíceps'},
  'Suspensão passiva':                        {cat:'Pull', n:1, exec:'Pendurado na barra, braços totalmente estendidos', dicas:'Relaxa o corpo. Excelente para descompressão da coluna e força de preensão', obj:'Base para pull-ups'},
  'Australian chin-ups':                      {cat:'Pull', n:1, exec:'Barra baixa, agarre supino, movimento de remo', dicas:'Ajusta a altura da barra para variar a dificuldade. Joelhos flexionados se necessário', obj:'Progressão para dominadas supinas'},
  'Australian pull-ups':                      {cat:'Pull', n:1, exec:'Barra baixa, agarre prono, movimento de remo', dicas:'Corpo reto, peito toca a barra. Quanto mais baixa a barra, mais difícil', obj:'Progressão para dominadas pronas'},

  // -------- Nível 2 · Básico --------
  'Pull-up de escápula':                      {cat:'Pull', n:2, exec:'Braços retos, apenas movimento das omoplatas', dicas:'Deprime e retrai escápulas, o peito sobe ligeiramente', obj:'Controle escapular e início do pull-up'},
  'Pull-up negativo':                         {cat:'Pull', n:2, exec:'Descida excêntrica controlada', dicas:'Sobe com salto ou apoio, desce em 3-5s. Excelente para preparar o pull-up', obj:'Excêntrico de puxar'},
  'Dominada supina estática':                 {cat:'Pull', n:2, exec:'Salta para posição alta e aguenta com o queixo acima da barra', dicas:'Aguenta 10s e vai aumentando. Aperta bem as omoplatas', obj:'Estática de puxar'},
  'Dominadas supinas negativas':              {cat:'Pull', n:2, exec:'Excêntrico de dominada supina', dicas:'Desce o mais devagar possível (3-5s). Sobe com salto', obj:'Excêntrico específico'},
  'Dominadas supinas curtas':                 {cat:'Pull', n:2, exec:'Repetições de pequeno rango na parte alta', dicas:'Vai aumentando o rango com o tempo', obj:'Progressão para dominada supina completa'},
  'Dominada prona estática':                  {cat:'Pull', n:2, exec:'Aguentar na parte alta com o queixo acima da barra', dicas:'Idêntica à supina, mas com pegada pronada', obj:'Estática de puxar prono'},
  'Dominada prona negativa':                  {cat:'Pull', n:2, exec:'Excêntrico de dominada pronada', dicas:'Desce em 3-5s, controla bem', obj:'Excêntrico específico'},
  'Dominadas pronas curtas':                  {cat:'Pull', n:2, exec:'Repetições curtas na parte alta', dicas:'Aumenta o rango gradualmente', obj:'Progressão para dominada prono completa'},

  // -------- Nível 3 · Intermédio --------
  'Pull-up assistido com faixa':              {cat:'Pull', n:3, exec:'Faixa compensa peso corporal', dicas:'Joelhos ou pé na faixa. Puxa até o queixo passar a barra', obj:'Transição para pull-up completo'},
  'Dominadas supinas':                        {cat:'Pull', n:3, exec:'Agarre supino, palmas viradas para ti', dicas:'Puxa até passar o queixo da barra. Desce até esticar os braços', obj:'Ênfase nos bíceps'},
  'Dominadas pronas':                         {cat:'Pull', n:3, exec:'Agarre prono, palmas para fora', dicas:'Puxa sem balançar. Cotovelos perpendiculares ao chão', obj:'Ênfase nos dorsais'},
  'Dominadas neutras':                        {cat:'Pull', n:3, exec:'Pegada neutra (paralela)', dicas:'Ideal para quem tem problema de pulsos', obj:'Pegada menos agressiva'},
  'Dominadas agarre misto':                   {cat:'Pull', n:3, exec:'Uma mão prona, outra supina', dicas:'Prepara para bandeira e muscle-up misto', obj:'Progressão para muscle-up misto'},
  'Dominadas agarre amplo':                   {cat:'Pull', n:3, exec:'Mãos com o dobro da largura dos ombros', dicas:'Foco no dorsal. Cuidado com pulsos', obj:'Prepara para typewriter e arqueiro'},
  'Dominadas agarre estreito':                {cat:'Pull', n:3, exec:'Mãos praticamente juntas', dicas:'Não é necessário que se toquem. Prepara para muscle-up estreito', obj:'Prepara muscle-up estreito'},
  'Retrações escapulares':                    {cat:'Pull', n:3, exec:'Na suspensão, retrai escápulas sem dobrar cotovelos', dicas:'Excelente para eliminar kipping e preparar front lever', obj:'Controle escapular e preparação para front lever'},
  'Remo em barra':                            {cat:'Pull', n:3, exec:'Dominada com corpo em L, pés para frente', dicas:'Prepara para pullover e front lever', obj:'Progressão para pullover'},
  'Muscle-up assistido com salto':            {cat:'Pull', n:3, exec:'Salto ajuda a passar a barra', dicas:'Barra a altura média-baixa. Ótimo para sentir o movimento', obj:'Progressão para muscle-up'},
  'Muscle-up com pierna':                     {cat:'Pull', n:3, exec:'Uma perna apoia na barra, balança e sobe', dicas:'Balancé com a outra perna esticada até gerar impulso', obj:'Progressão para muscle-up'},

  // -------- Nível 4 · Avançado --------
  'Pull-up pronado':                          {cat:'Pull', n:4, exec:'Pegada pronada, mãos na largura dos ombros', dicas:'Puxa sem balançar, cotovelos perpendiculares ao chão, queixo passa a barra', obj:'Força máxima de dorsais e bíceps'},
  'Pull-up arqueiro':                         {cat:'Pull', n:4, exec:'Um braço puxa, outro estende', dicas:'Movimento vertical e depois horizontal, alterna os lados', obj:'Força unilateral e controle'},
  'Pull-up neutro alternado':                 {cat:'Pull', n:4, exec:'Pegada neutra, cabeça para um lado', dicas:'Puxa o corpo, move a cabeça para um lado da barra, alterna', obj:'Fortalecer bíceps e dorsais de forma equilibrada'},
  'Dominadas explosivas':                     {cat:'Pull', n:4, exec:'Dominadas mais enérgicas, mãos descolam da barra', dicas:'Peito vai ao encontro da barra. Preparação para palmada e muscle-up', obj:'Potência de puxar'},
  'Dominadas arqueiras':                      {cat:'Pull', n:4, exec:'Como assimétricas, mas o braço livre fica estendido por cima da barra', dicas:'Prepara typewriter e freestyle', obj:'Força unilateral avançada'},
  'Dominadas typewriter':                     {cat:'Pull', n:4, exec:'Arqueiras sem deixar o queixo descer abaixo da barra', dicas:'Movimento horizontal de um lado ao outro', obj:'Prepara dominada a um braço'},
  'Dominadas Artem Morozov':                  {cat:'Pull', n:4, exec:'Ao passar o queixo, pausa e segundo esforço para subir mais', dicas:'Contrai dorsais e trapézio. Prepara front lever', obj:'Força extrema de dorsais'},
  'Dominadas supinas em L':                   {cat:'Pull', n:4, exec:'Dominadas supinas com pernas em L', dicas:'Pernas paralelas ao chão durante todo o movimento', obj:'Força integrada de core e puxar'},
  'Muscle-up':                                {cat:'Pull', n:4, exec:'Transição da barra para apoio', dicas:'Puxe explosivo, gire os punhos, cotovelos altos, empurre para estender', obj:'Força explosiva e transição pull → push'},
  'Muscle-up estrito':                        {cat:'Pull', n:4, exec:'Muscle-up com pernas retas', dicas:'Sem flexão de joelhos, sem adiantar pés mais de 30cm', obj:'Muscle-up limpo, sem kipping'},
  'Muscle-up agarre cerrado':                 {cat:'Pull', n:4, exec:'Muscle-up com mãos juntas', dicas:'Separa se for incómodo para os pulsos', obj:'Prepara muscle-up estrito'},
  'Muscle-up agarre amplo':                   {cat:'Pull', n:4, exec:'Muscle-up com agarre duplo do ombro', dicas:'Mais trabalho de dorsal', obj:'Variante de força de dorsal'},
  'Muscle-up supino':                         {cat:'Pull', n:4, exec:'Muscle-up com pegada supina', dicas:'No início apoia o peito na barra, depois sai limpo', obj:'Ênfase no bíceps'},
  'Muscle-up lento':                          {cat:'Pull', n:4, exec:'Muscle-up com agarre falso (pulso sobre a barra)', dicas:'O agarre falso evita ter de girar os pulsos. Sai mais fácil', obj:'Prepara muscle-up estrito'},

  // -------- Nível 5 · Elite --------
  'Dominadas com palmada':                    {cat:'Pull', n:5, exec:'Dominada explosiva dando palmada acima da barra', dicas:'Sobe forte o suficiente para ter tempo. Cuidado na queda', obj:'Potência de puxar elite'},
  'Dominadas tocando pés':                    {cat:'Pull', n:5, exec:'Explosivo, estica os pés em horizontal e toca-os', dicas:'Precisa de flexibilidade. Muito visual', obj:'Freestyle de barra'},
  'Dominadas a um braço':                     {cat:'Pull', n:5, exec:'Dominada com um só braço', dicas:'No início ajuda com pequeno impulso. Usa o agarre mais confortável', obj:'Força máxima unilateral'},
  'Muscle-up 360':                            {cat:'Pull', n:5, exec:'Muscle-up com salto girando 360°', dicas:'Salta para cima, não para trás. Gira sobre ti mesmo', obj:'Freestyle de elite'},
  'Muscle-up a front lever':                  {cat:'Pull', n:5, exec:'Muscle-up + descida direta para front lever', dicas:'Usa agarre falso para voltar a subir mais fácil', obj:'Integração de força extrema'},
  'Muscle-up a um braço':                     {cat:'Pull', n:5, exec:'Muscle-up com um só braço', dicas:'Precisa de dominadas e fondos a um braço dominados', obj:'Elite absoluta de puxar'},

  /* ============================ PERNAS ============================ */

  'Agachamento com peso corporal':            {cat:'Pernas', n:1, exec:'Base para todos os agachamentos', dicas:'Pés na largura dos ombros, desça como se fosse sentar, joelhos alinhados aos pés', obj:'Força de quadríceps, glúteos e isquiotibiais'},
  'Agachamento profundo':                     {cat:'Pernas', n:1, exec:'Desça abaixo da paralela', dicas:'Dedos para fora 0-30°, peso no meio do pé, core firme', obj:'Mobilidade de quadril e tornozelo'},
  'Sentadilla assistida':                     {cat:'Pernas', n:1, exec:'Com apoio da barra baixa', dicas:'Mãos na barra à frente, desce até 90°, vai reduzindo a ajuda', obj:'Base para sentadilla livre'},
  'Estático sentadilla contra a parede':      {cat:'Pernas', n:1, exec:'Costas na parede, joelhos a 90°', dicas:'Aguenta o tempo que conseguir. Ótimo para resistência', obj:'Resistência de quadríceps'},
  'Sentadilla curta':                         {cat:'Pernas', n:1, exec:'Desce só até 45°', dicas:'Abertura ligeiramente maior que os ombros, pontas para fora', obj:'Progressão para sentadilla completa'},
  'Agachamento de posição estreita':          {cat:'Pernas', n:2, exec:'Pés próximos, apontando para frente', dicas:'Desça lento (4s), segure 1s, suba em 4s, usa parede se necessário', obj:'Equilíbrio e foco no quadríceps'},
  'Agachamento dividido búlgaro':             {cat:'Pernas', n:2, exec:'Pé de trás em caixa, pé da frente no chão', dicas:'Tronco ligeiramente inclinado, joelho alinhado ao pé, 90% do peso na perna da frente', obj:'Força unilateral e simetria'},
  'Agachamento cossaco':                      {cat:'Pernas', n:3, exec:'Uma perna dobra, outra estende', dicas:'Pés largos, dedos para fora, perna estendida não toca o chão', obj:'Flexibilidade de isquiotibiais e força unilateral'},
  'Agachamento pistola (box)':                {cat:'Pernas', n:4, exec:'Senta em caixa e levante com uma perna', dicas:'Desça como se não houvesse caixa, mantém tensão', obj:'Progressão para agachamento unilateral completo'},
  'Agachamento excêntrico pistola':           {cat:'Pernas', n:4, exec:'Foco na descida', dicas:'Desça em 3-4s, pausa embaixo, sobe com dois pés', obj:'Controle excêntrico e força unilateral'},
  'Agachamento pistola completo':             {cat:'Pernas', n:5, exec:'Uma perna, sem apoio', dicas:'Perna estendida não toca o chão, braços à frente para equilíbrio, coluna neutra', obj:'Força máxima, equilíbrio e mobilidade'},

  // -------- Novas pernas --------
  'Estático sentadilla':                      {cat:'Pernas', n:2, exec:'Sentadilla isométrica a 90°', dicas:'Aguenta o tempo que conseguir. Sem apoio', obj:'Resistência isométrica'},
  'Levantamento de gêmeos':                   {cat:'Pernas', n:2, exec:'Bordo de degrau, sobe nas pontas dos pés', dicas:'Movimento curto no início, vai aumentando o rango', obj:'Fortalecimento de gêmeos'},
  'Curl femoral com peso corporal':           {cat:'Pernas', n:2, exec:'Deitado, sobe o quadril flexionando joelhos', dicas:'Espinha alinhada com as coxas no topo', obj:'Isquiotibiais'},
  'Sentadilla sumo':                          {cat:'Pernas', n:2, exec:'Abertura maior que o normal, pontas para fora', dicas:'Intensifica o trabalho de glúteo', obj:'Glúteos e adutores'},
  'Zancadas':                                 {cat:'Pernas', n:2, exec:'Passo à frente, desce o joelho de trás', dicas:'Joelho de trás não toca o chão. Joelho da frente a 90°', obj:'Força unilateral e equilíbrio'},
  'Zancadas laterais':                        {cat:'Pernas', n:3, exec:'Passo lateral, flexiona uma perna e mantém a outra reta', dicas:'Ativa o interior da coxa', obj:'Adutores e glúteos'},
  'Sentadilla curta a uma perna':             {cat:'Pernas', n:3, exec:'Uma perna, desce só 45°', dicas:'Equilíbrio na perna de apoio, joelho alinhado', obj:'Progressão para pistol squat'},
  'Curl femoral a uma perna':                 {cat:'Pernas', n:3, exec:'Deitado, uma perna flexionada no ar', dicas:'Sobe o quadril até alinhar com os ombros', obj:'Isquiotibiais unilateral'},
  'Zancadas explosivas com troca':            {cat:'Pernas', n:3, exec:'Zancada + salto + troca de perna no ar', dicas:'Sem parar em posição de pé. Fluido e explosivo', obj:'Potência de pernas'},
  'Hawaiian squat':                           {cat:'Pernas', n:4, exec:'Pé apoiado no joelho oposto, desce a 90°', dicas:'Excelente progressão para pistol squat', obj:'Progressão para pistol'},
  'Maldinis squat':                           {cat:'Pernas', n:4, exec:'Pé por trás do joelho, seguro com a mão oposta', dicas:'Como Hawaiian, mas por trás', obj:'Progressão para pistol'},
  'Pistol squat assistida':                   {cat:'Pernas', n:4, exec:'Seguro num poste, uma perna esticada', dicas:'Glúteos devem raspar o chão. Não levantar o calcanhar', obj:'Progressão para pistol completo'},
  'Sentadilla explosiva':                     {cat:'Pernas', n:4, exec:'Sentadilla normal + salto', dicas:'Pode levar joelhos ao peito para maior dificuldade', obj:'Potência de pernas'},
  'Saltos a plataforma':                      {cat:'Pernas', n:4, exec:'Salto para plataforma na altura da cintura', dicas:'Sobe com os dois pés ao mesmo tempo, desce de salto', obj:'Potência e coordenação'},
  'Airborne squat':                           {cat:'Pernas', n:4, exec:'Uma perna atrás, desce até o joelho tocar o chão', dicas:'Sem inclinar para frente, sem rebote', obj:'Progressão para pistol'},
  'Pistol squat':                             {cat:'Pernas', n:5, exec:'Agachamento unilateral completo', dicas:'Glúteos tocam o chão, calcanhar sempre apoiado', obj:'Força máxima unilateral'},
  'Shotgun pistol squat':                     {cat:'Pernas', n:5, exec:'Pistol squat com levantamento de gêmeos em baixo', dicas:'Sobe nas pontas na parte baixa, volta a descer o calcanhar', obj:'Pistol + gêmeos'},
  'Pistol squat explosiva':                   {cat:'Pernas', n:5, exec:'Pistol squat com salto', dicas:'Salta ao estender a perna. Nível elite', obj:'Potência unilateral máxima'},

  /* ============================ ABDÔMEN / CORE ============================ */

  'Prancha lateral':                          {cat:'Abdômen', n:1, exec:'Prancha de lado', dicas:'Corpo alinhado, quadril elevado, respiração estável', obj:'Estabilidade lateral do core'},
  'Crunches curtos em solo':                  {cat:'Abdômen', n:1, exec:'Deitado, levanta só a parte alta das costas', dicas:'Joelhos flexionados no ar, movimento curto e controlado', obj:'Introdução ao trabalho de abdômen'},
  'Elevação de pernas':                       {cat:'Abdômen', n:2, exec:'Deitado, eleve as pernas estendidas', dicas:'Lombar no chão, desça devagar sem tocar o chão', obj:'Força do abdômen inferior'},
  'Abdominal remador':                        {cat:'Abdômen', n:2, exec:'Senta e volta', dicas:'Movimento controlado, sem impulso', obj:'Resistência do core'},
  'Crunches completos em solo':               {cat:'Abdômen', n:2, exec:'Sobe a coluna do chão, cabeça vai ao joelho', dicas:'Contrai o abdômen de verdade, não puxa o pescoço', obj:'Força de abdômen superior'},
  'Tijeras em solo':                          {cat:'Abdômen', n:2, exec:'Deitado, pernas a 15cm do chão, cruza uma sobre a outra', dicas:'Calcanhares nunca tocam o chão. Movimento contínuo', obj:'Resistência do abdômen inferior'},
  'Leg raises em solo':                       {cat:'Abdômen', n:2, exec:'Deitado, sobe as duas pernas a 90°', dicas:'Pernas retas, desce controlado sem tocar o chão', obj:'Força do abdômen inferior'},
  'Hollow body hold':                         {cat:'Abdômen', n:3, exec:'Isometria em forma de canoa', dicas:'Lombar apoiada, braços acima da cabeça, segure', obj:'Estabilidade isométrica do core'},
  'Windshield wipers em solo':                {cat:'Abdômen', n:3, exec:'Deitado, pernas a 90°, leva-as para os lados', dicas:'Pés quase tocam o chão em cada lado. Move com controle', obj:'Oblíquos avançados'},
  'Crunches lumbares':                        {cat:'Abdômen', n:3, exec:'Deitado de barriga para baixo, sobe tronco e pernas', dicas:'Estica os braços à frente, contrai a lombar', obj:'Fortalecimento da lombar'},
  'Russian twist crunches':                   {cat:'Abdômen', n:3, exec:'Sentado, pés no chão, mãos juntas rodando o tronco', dicas:'Roda de um lado ao outro, quadril estável', obj:'Oblíquos e core'},
  'Knee raises em fundos':                    {cat:'Abdômen', n:3, exec:'Em fundos, sobe os joelhos ao peito', dicas:'Sem balanço nem inércia. Volta controlado', obj:'Abdômen inferior e psoas'},
  'Knee raises em barra':                     {cat:'Abdômen', n:3, exec:'Pendurado, sobe os joelhos ao peito', dicas:'Sem flexionar os braços. Encontra o ritmo certo', obj:'Abdômen inferior e psoas'},
  'L sit raises em fundos':                   {cat:'Abdômen', n:3, exec:'Em fundos, sobe as pernas retas até 90°', dicas:'Sem usar balanço, sobe com controle', obj:'Abdômen e psoas'},
  'L sit raises em barra':                    {cat:'Abdômen', n:3, exec:'Pendurado, sobe pernas retas até 90°', dicas:'Evita balanço. Excelente para L-sit', obj:'Abdômen, psoas e lombar'},
  'Dragon flag':                              {cat:'Abdômen', n:4, exec:'Deitado, eleve o corpo como uma bandeira', dicas:'Ombros firmes, corpo reto, desça controlado', obj:'Força máxima do core'},
  'Estático L sit em fundos':                 {cat:'Abdômen', n:4, exec:'Em fundos, pernas retas a 90°, aguenta', dicas:'Aguenta o máximo de tempo. Corpo firme', obj:'Estática de core'},
  'Knee raises em barra com guiño':           {cat:'Abdômen', n:4, exec:'Knee raise + giro lateral do quadril', dicas:'Os pés vão para um lado. Trabalha oblíquos', obj:'Prepara windshield wipers'},
  'Elevações em V em fundos':                 {cat:'Abdômen', n:4, exec:'Em fundos, joelhos ao peito e depois estica para V', dicas:'Movimento fluido: encolhe e estica', obj:'Força dinâmica de core'},
  'Leg raises':                               {cat:'Abdômen', n:4, exec:'Pendurado, sobe os pés até a barra', dicas:'Sem flexionar os joelhos. Excelente progressão para front lever', obj:'Força de core e dorsais'},
  'Windshield wipers':                        {cat:'Abdômen', n:4, exec:'Pendurado em L, leva os pés de um lado ao outro', dicas:'Pernas sempre retas. Quadril acompanha o movimento', obj:'Oblíquos avançados'},
  'Pullover':                                 {cat:'Abdômen', n:4, exec:'Pendurado, sobe os pés até a barra e dá uma volta', dicas:'Gira por cima da barra até ficar em fundos', obj:'Prepara L-sit pullover'},
  'Prancha abdominal avançada':               {cat:'Abdômen', n:4, exec:'Deitado, estica braços e pernas, apoia só mãos e pés', dicas:'Levanta o corpo do chão completamente', obj:'Core + ombros + lombar'},
  'L sit leg raises':                         {cat:'Abdômen', n:5, exec:'De L-sit, sobe as pernas até a barra e volta a L-sit', dicas:'Freia a descida, não cai direto', obj:'Força máxima de core'},
  'L sit pullover':                           {cat:'Abdômen', n:5, exec:'De L-sit, dá uma volta na barra e volta a L-sit', dicas:'Combina força de core e dorsais', obj:'Progressão para front lever'},
  'Vuelta al mundo':                          {cat:'Abdômen', n:5, exec:'Pendurado, sobe os pés de um lado e roda 360°', dicas:'Pernas sempre retas. Giro completo', obj:'Elite de core e oblíquos'},

  /* ============================ HABILIDADES ============================ */

  'Skin the cat (abdômen grupado)':           {cat:'Habilidades', n:3, exec:'Argolas/barra, eleva quadril e gira', dicas:'Pernas juntas, joelhos no peito, gire até pés nivelados com argolas', obj:'Mobilidade de ombro e controle corporal'},
  'Vela':                                     {cat:'Habilidades', n:3, exec:'Argolas, eleve quadril até apoio invertido', dicas:'Estique pernas, cabeça para baixo, corpo ereto', obj:'Equilíbrio invertido e força de ombro'},
  'Pica em barra':                            {cat:'Habilidades', n:2, exec:'Pendurado, passa as pernas entre os braços e fica em V invertido', dicas:'Estica bem, separa as pernas uns 10cm da barra', obj:'Prepara back lever'},
  'Rana':                                     {cat:'Habilidades', n:3, exec:'Cócoras, mãos no chão, joelhos nos cotovelos', dicas:'Codos dobrados, inclina até levantar os pés do chão', obj:'Introdução à planche'},
  'Turtle planche':                           {cat:'Habilidades', n:3, exec:'Rana com uma mão à frente, corpo paralelo', dicas:'Codo espetado na lateral do abdómen', obj:'Progressão para planche lean'},
  'Bandeira em tucked':                       {cat:'Habilidades', n:3, exec:'Numa barra vertical, joelhos ao peito, corpo paralelo', dicas:'Uma mão em cima, outra em baixo. Prepara bandeira completa', obj:'Progressão para bandeira'},
  'Tucked front lever':                       {cat:'Habilidades', n:3, exec:'Pendurado, joelhos ao peito, costas paralelas ao chão', dicas:'Braços esticados. Prepara front lever', obj:'Progressão para front lever'},
  'Dragon flag a 1 pierna':                   {cat:'Habilidades', n:3, exec:'Dragon flag com uma perna só', dicas:'Uma perna fica a 45°, a outra recolhida', obj:'Progressão para dragon flag'},
  'Back lever a 45º':                         {cat:'Habilidades', n:3, exec:'Pica em barra a 45° do chão', dicas:'Progressão para back lever completo', obj:'Prepara back lever'},
  'Pino assistido contra a parede':           {cat:'Habilidades', n:3, exec:'Pino com os pés na parede', dicas:'Costas viradas para a parede. Aguenta o tempo que puder', obj:'Introdução ao pino'},
  'Impulsos a pino':                          {cat:'Habilidades', n:3, exec:'Impulsiona com as pernas até a vertical', dicas:'Olha para o chão para não perder referência. Evita quedas bruscas', obj:'Prepara o pino livre'},
  'Flexões a pino assistidas curtas':         {cat:'Habilidades', n:3, exec:'Pino contra parede + flexão de curto rango', dicas:'Começa pelo rango curto, vai aumentando', obj:'Progressão para flexões a pino completas'},
  'Front lever (abdômen carpado)':            {cat:'Habilidades', n:4, exec:'Barra, eleve pernas estendidas até canela tocar barra', dicas:'Escápulas ativas, pernas estendidas, corpo horizontal', obj:'Força de dorsais e core'},
  'Front lever (isometria grupada)':          {cat:'Habilidades', n:4, exec:'Pernas flexionadas, joelhos entre braços', dicas:'Empurre a barra, sem flexionar cotovelos, segure', obj:'Força isométrica de dorsais e core'},
  'Front lever (isometria unilateral)':       {cat:'Habilidades', n:4, exec:'Uma perna flexionada, outra estendida', dicas:'Alterne as pernas, mantenha tronco paralelo ao chão', obj:'Força unilateral e controle'},
  'Back lever (extensão de tronco invertida)':{cat:'Habilidades', n:4, exec:'Espaldar, meia volta, pernas estendidas', dicas:'Costas apoiadas, pernas sobem até 90°, retorne à vela', obj:'Força de ombro e controle invertido'},
  'Back lever (vela posterior)':              {cat:'Habilidades', n:4, exec:'Barra na altura dos glúteos, corpo na diagonal', dicas:'Cabeça para frente, pernas para trás, corpo estendido', obj:'Força de ombro e core'},
  'Back lever (perna flexionada)':            {cat:'Habilidades', n:4, exec:'Uma perna flexionada, tronco paralelo ao chão', dicas:'Joelhos entre braços, quadril elevado', obj:'Progressão para back lever completo'},
  'Bandera caída':                            {cat:'Habilidades', n:4, exec:'Bandeira com pernas esticadas a 45°', dicas:'Pernas retas, busca o ângulo de 45°', obj:'Progressão para bandeira completa'},
  'Back lever a 1 pierna':                    {cat:'Habilidades', n:4, exec:'Back lever com uma perna flexionada', dicas:'Desce uma perna de cada vez até paralelo ao chão', obj:'Progressão para back lever completo'},
  'Front lever a 1 pierna':                   {cat:'Habilidades', n:4, exec:'Tucked + estende uma perna', dicas:'Mantém a perna estendida paralela ao chão', obj:'Progressão para front lever'},
  'Hefesto com pés no solo':                  {cat:'Habilidades', n:4, exec:'Barra à altura da cintura, corpo por trás, sobe com os cotovelos', dicas:'Pés apoiados no chão ajudam', obj:'Progressão para hefesto completo'},
  'Half front lever':                         {cat:'Habilidades', n:4, exec:'Front lever com joelhos dobrados, pés para baixo', dicas:'Prepara o front lever completo', obj:'Progressão para front lever'},
  'Planche lean':                             {cat:'Habilidades', n:4, exec:'Posição de flexão inclinada à frente', dicas:'Ombros muito à frente das mãos, escápulas protraídas', obj:'Prepara tucked planche'},
  'Tucked planche':                           {cat:'Habilidades', n:4, exec:'Rana com braços por fora das pernas, corpo suspenso', dicas:'Joelhos no peito, quadril elevado', obj:'Progressão para straddle planche'},
  'Pseudo plancha':                           {cat:'Habilidades', n:4, exec:'Mãos em supinação, cotovelos no abdómen, corpo paralelo', dicas:'Pés suspensos, corpo reto', obj:'Prepara planche'},
  'Pino':                                     {cat:'Habilidades', n:4, exec:'Equilíbrio na vertical sem apoio', dicas:'Controla com ombros, cotovelos e pulsos. Pequeno arco é aceitável', obj:'Equilíbrio invertido livre'},
  'Flexões a pino':                           {cat:'Habilidades', n:4, exec:'Pino livre + flexão', dicas:'Começa com rango curto, vai aumentando', obj:'Força de ombro com equilíbrio'},
  'Front lever completo':                     {cat:'Habilidades', n:5, exec:'Pernas totalmente estendidas, corpo horizontal', dicas:'Ombros para trás, pernas estendidas, segure', obj:'Força máxima de dorsais e core'},
  'Back lever completo':                      {cat:'Habilidades', n:5, exec:'Corpo estendido, paralelo ao chão', dicas:'Pernas estendidas, tronco paralelo, segure', obj:'Força máxima de ombro e core'},
  'Planche (isometria com avanço)':           {cat:'Habilidades', n:4, exec:'Prancha, ombros avançam sobre as mãos', dicas:'Braços estendidos, glúteos ativos, pernas suspensas', obj:'Força de ombro e preparação para planche'},
  'Planche (tuck isométrico)':                {cat:'Habilidades', n:5, exec:'Joelhos no peito, corpo suspenso', dicas:'Braços estendidos, ombros à frente das mãos, segure', obj:'Força máxima de ombro e core'},
  'Planche completo':                         {cat:'Habilidades', n:5, exec:'Corpo paralelo ao chão, pernas estendidas', dicas:'Braços estendidos, ombros à frente, corpo alinhado', obj:'Força elite de ombro, core e equilíbrio'},
  'Rana a pino':                              {cat:'Habilidades', n:5, exec:'Sobe de rana para pino com força dos ombros', dicas:'Abrir as pernas durante a subida ajuda', obj:'Prepara press a pino'},
  'Pino recto':                               {cat:'Habilidades', n:5, exec:'Pino com corpo hollow, sem arco', dicas:'Estica braços ao máximo, contrai abdómen, retroverte a bacia', obj:'Pino perfeito'},
  'Flexões a pino profundas':                 {cat:'Habilidades', n:5, exec:'Flexões a pino em paralelas, cabeça abaixo das barras', dicas:'Corpo reto, não arqueado, para não perder equilíbrio', obj:'Força máxima de ombro'},
  'Tucked planche a pino':                    {cat:'Habilidades', n:5, exec:'De tucked planche, sobe a pino', dicas:'Primeiro com codos desbloqueados, depois bloqueados', obj:'Transição avançada'},
  'Straddle press a pino':                    {cat:'Habilidades', n:5, exec:'Pernas abertas esticadas → sobe a pino sem salto', dicas:'Eleva o quadril até vertical, depois sobe as pernas', obj:'Press sem impulso'},
  'Flexão a pino com palmada':                {cat:'Habilidades', n:5, exec:'Rana → pino explosivo → palmada no ar', dicas:'Espera que as pernas subam antes de dar a palmada', obj:'Freestyle de elite'},
  'Press a pino':                             {cat:'Habilidades', n:5, exec:'Pernas unidas, sobe a pino sem salto', dicas:'Precisa de straddle press dominado', obj:'Força máxima de ombro'},
  'Pino em barra':                            {cat:'Habilidades', n:5, exec:'Pino em cima de uma barra', dicas:'Prepara freestyle de barra. Trabalha muito os pulsos', obj:'Equilíbrio extremo'},
  'Pino a uma mão':                           {cat:'Habilidades', n:5, exec:'Pino com um só braço', dicas:'Cria um ângulo com o peito, não te inclinas para o lado', obj:'Elite absoluta de equilíbrio'},
  'Straddle planche':                         {cat:'Habilidades', n:5, exec:'Planche com pernas abertas', dicas:'Mãos mais largas que os ombros, dedos ligeiramente para fora', obj:'Progressão para full planche'},
  'Full planche':                             {cat:'Habilidades', n:5, exec:'Planche com pernas juntas', dicas:'Escápulas protraídas, mínima curva lombar', obj:'Elite de força de ombro'},
  'Straddle maltese planche':                 {cat:'Habilidades', n:5, exec:'Planche straddle com mãos muito abertas', dicas:'Corpo e cabeça muito próximos do chão', obj:'Progressão para full maltese'},
  'Full maltese planche':                     {cat:'Habilidades', n:5, exec:'Maltese com pernas juntas', dicas:'Nível Olímpico de ginástica', obj:'Elite absoluta de planche'},
  'Hefesto':                                  {cat:'Habilidades', n:5, exec:'Barra supina, pernas por trás, sobe com os cotovelos', dicas:'Costas inferiores apoiam na barra no topo', obj:'Força extrema de bíceps e ombro'},

  /* ============================ ALIASES / CORE ADICIONAL ============================ */
  'Windshield wipers em solo':                {cat:'Abdômen', n:3, exec:'Deitado, pernas a 90° movem-se lado a lado', dicas:'Pés quase tocam o chão em cada lado', obj:'Oblíquos'},
  'Crunches curtos lumbares':                 {cat:'Abdômen', n:3, exec:'Deitado de barriga para baixo, sobe só o peito', dicas:'Mãos atrás da cabeça, contração curta', obj:'Introdução à lombar'},
  'Estático crunche lumbar':                  {cat:'Abdômen', n:3, exec:'Isométrico de crunches lumbares', dicas:'Aguenta na posição elevada o máximo possível', obj:'Resistência da lombar'},
  'L sit raises em fundos com guiño':         {cat:'Abdômen', n:4, exec:'L-sit + giro lateral do quadril', dicas:'Pés vão para um lado, alterna', obj:'Prepara windshield wipers'},
  'Estático dominada a um braço':             {cat:'Pull', n:5, exec:'Dominada supina alta + solta um braço', dicas:'Codo espetado na lateral da cintura ajuda', obj:'Prepara dominada a um braço'},
  'Retração escapular a um braço':            {cat:'Pull', n:5, exec:'Pendurado num braço, retrai a escápula sem dobrar o cotovelo', dicas:'Sobe ligeiramente o corpo só com a escápula', obj:'Prepara dominada e muscle-up a um braço'},

  /* ============================ PERNAS (FALTANTES) ============================ */
  'Estático contra a parede a 1 perna':       {cat:'Pernas', n:4, exec:'Sentado na parede com uma perna só', dicas:'Outra perna esticada à frente', obj:'Progressão para pistol'},
  'Shotgun pistol squat assistida':           {cat:'Pernas', n:4, exec:'Pistol assistida + sobe nas pontas na parte baixa', dicas:'Trabalha também os gêmeos', obj:'Progressão para shotgun completo'}
};
/* ---------------------------------------------------------
   2) ESTADO
   --------------------------------------------------------- */
const state = {
  modo: null,
  filtroNivel: 'todos',
  treinoSendoCriado: [],
  meusTreinos: [],                       // [{nome, tipo, nivel, foco, exercicios}]
  agenda: {seg:null, ter:null, qua:null, qui:null, sex:null, sab:null, dom:null},
  historico: [],
  treinoAgendando: null,
  diaSelecionado: null,
  vista: 'semanal'
};

/* ---------------------------------------------------------
   3) HELPERS
   --------------------------------------------------------- */
const $  = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => (
  {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]
));
const tagCat = cat => ({
  'Push':'tag-Push','Pull':'tag-Pull','Pernas':'tag-Pernas'
}[cat] || 'tag-Hab');

const DIAS = ['dom','seg','ter','qua','qui','sex','sab'];
const sessaoTreino = {
  treino: null,
  inicio: null,
  intervalo: null,
  modoOrigem: 'prontos'
};
const NOMES_DIAS = {
  dom:'Domingo', seg:'Segunda', ter:'Terça', qua:'Quarta',
  qui:'Quinta', sex:'Sexta', sab:'Sábado'
};
const DIAS_SEMANA = ['seg','ter','qua','qui','sex','sab','dom'];
const STORAGE_KEY = 'blue-calistenics-dados-v1';

function carregarDadosSalvos(){
  try {
    const salvo = localStorage.getItem(STORAGE_KEY);
    if(!salvo) return;

    const dados = JSON.parse(salvo);
    if(dados && typeof dados === 'object'){
      if(Array.isArray(dados.meusTreinos)){
        state.meusTreinos = dados.meusTreinos.filter(t =>
          t && typeof t.nome === 'string' && t.tipo === 'criado' && Array.isArray(t.exercicios));
      }
      if(Array.isArray(dados.historico)){
        state.historico = dados.historico.filter(item =>
          item &&
          typeof item.nome === 'string' &&
          typeof item.data === 'string' &&
          Number.isFinite(item.duracao) &&
          Number.isFinite(item.concluidos) &&
          Number.isFinite(item.total) &&
          item.grupos &&
          typeof item.grupos === 'object' &&
          !Array.isArray(item.grupos)
        );
      }
      if(dados.agenda && typeof dados.agenda === 'object'){
        DIAS.forEach(dia => {
          const treino = dados.agenda[dia];
          if(treino === null || treino === undefined){
            state.agenda[dia] = null;
          } else if(
            treino &&
            typeof treino.nome === 'string' &&
            Array.isArray(treino.exercicios)
          ){
            state.agenda[dia] = treino;
          }
        });
      }
    }
  } catch (error) {
    console.error('Não foi possível carregar a agenda salva.', error);
  }
}

function salvarDados(){
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      meusTreinos: state.meusTreinos,
      agenda: state.agenda,
      historico: state.historico
    }));
    return true;
  } catch (error) {
    console.error('Não foi possível salvar seus treinos e sua agenda.', error);
    alert('Não foi possível salvar as alterações. Verifique o espaço disponível no navegador e tente novamente.');
    return false;
  }
}

carregarDadosSalvos();

/* ---------------------------------------------------------
   4) PASSO 1 — ESCOLHA DE MODO
   --------------------------------------------------------- */
function iniciarModo(){
  const botoes = $$('#passo1 .opcao');
  if(!botoes.length) return;

  $$('.menu a[href="#secaoProntos"]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      if(sessaoTreino.treino) voltarAosTreinos();
      const botaoProntos = botoes.find(btn => btn.dataset.modo === 'prontos');
      if(botaoProntos) botaoProntos.click();
      history.replaceState(null, '', '#secaoProntos');
      $('#secaoProntos').scrollIntoView({behavior:'smooth'});
    });
  });

  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      state.modo = btn.dataset.modo;
      botoes.forEach(b => b.classList.toggle('sel', b === btn));

      const ehPronto = state.modo === 'prontos';
      const secaoAtiva = ehPronto ? $('#secaoProntos') : $('#secaoCriar');
      requestAnimationFrame(() => secaoAtiva.scrollIntoView({behavior:'smooth'}));
    });
  });

  const iniciarComProntos = new URLSearchParams(window.location.search).get('modo') === 'prontos';
  const abrirProntosPeloMenu = window.location.hash === '#secaoProntos';
  if(iniciarComProntos || abrirProntosPeloMenu){
    const botaoProntos = botoes.find(btn => btn.dataset.modo === 'prontos');
    if(botaoProntos){
      botaoProntos.click();
      requestAnimationFrame(() => $('#secaoProntos').scrollIntoView({behavior:'smooth'}));
    }
  }
}

/* ---------------------------------------------------------
   5) FILTRO DE TREINOS PRONTOS
   --------------------------------------------------------- */
function iniciarFiltroProntos(){
  const filtros = $$('#filtroNiveis .filtro');
  if(filtros[0]) filtros[0].classList.add('sel');

  filtros.forEach(btn => {
    btn.addEventListener('click', () => {
      state.filtroNivel = btn.dataset.filtroNivel;
      filtros.forEach(b => b.classList.toggle('sel', b === btn));

      $$('#listaProntos .treino-pronto').forEach(card => {
        const n = card.dataset.nivel;
        const mostrar = state.filtroNivel === 'todos' || state.filtroNivel === n;
        card.style.display = mostrar ? '' : 'none';
      });
    });
  });
}

/* ---------------------------------------------------------
   6) INICIAR UM TREINO
   --------------------------------------------------------- */
function formatarDuracao(segundos){
  const total = Math.max(0, Math.floor(segundos));
  const horas = Math.floor(total / 3600);
  const minutos = Math.floor((total % 3600) / 60);
  const resto = total % 60;
  return horas
    ? `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(resto).padStart(2, '0')}`
    : `${String(minutos).padStart(2, '0')}:${String(resto).padStart(2, '0')}`;
}

function atualizarRelogioSessao(){
  if(!sessaoTreino.inicio) return;
  $('#sessaoTempo').textContent = formatarDuracao((Date.now() - sessaoTreino.inicio) / 1000);
}

function atualizarProgressoSessao(){
  const exercicios = sessaoTreino.treino.exercicios;
  const concluidos = exercicios.filter(ex => ex.concluido).length;
  const progresso = exercicios.length ? Math.round(concluidos / exercicios.length * 100) : 0;
  $('#sessaoContagem').textContent = `${concluidos} / ${exercicios.length}`;
  $('#sessaoBarra').style.width = `${progresso}%`;
  $('.sessao-progresso').setAttribute('aria-valuenow', String(progresso));
}

function renderizarExerciciosSessao(){
  const wrap = $('#listaSessao');
  wrap.innerHTML = sessaoTreino.treino.exercicios.map((ex, idx) => {
    const info = EX[ex.nome];
    const prescricao = [
      ex.series ? `${ex.series} séries` : null,
      ex.reps ? `${ex.reps} por série` : null,
      ex.descanso ? `${ex.descanso}s de descanso` : null
    ].filter(Boolean).join(' · ');
    return `
      <article class="sessao-exercicio ${ex.concluido ? 'feito' : ''}">
        <div class="sessao-exercicio-info">
          <span class="sessao-numero">Exercício ${idx + 1}</span>
          <h3>${esc(ex.nome)}</h3>
          ${prescricao ? `<p>${esc(prescricao)}</p>` : ''}
          ${info ? `<details><summary>Dica de execução</summary><p>${esc(info.dicas)}</p></details>` : ''}
        </div>
        <button class="btn ${ex.concluido ? '' : 'primary'}" data-acao="marcar-exercicio" data-idx="${idx}">
          ${ex.concluido ? 'Concluído ✓' : 'Marcar como concluído'}
        </button>
      </article>`;
  }).join('');
  atualizarProgressoSessao();
}

function mostrarSessao(treino, modoOrigem){
  if(!treino.exercicios || !treino.exercicios.length){
    alert('Este treino não tem exercícios para iniciar.');
    return;
  }

  if(!$('#sessaoTreino')){
    const paginaTreino = new URL('Treinar.html', window.location.href);
    paginaTreino.searchParams.set('treino', JSON.stringify({
      nome: treino.nome,
      nivel: treino.nivel,
      descricao: treino.descricao || '',
      exercicios: treino.exercicios.map(ex => ({
        nome: ex.nome,
        series: ex.series,
        reps: ex.reps,
        descanso: ex.descanso
      }))
    }));
    window.location.assign(paginaTreino.href);
    return;
  }

  if(sessaoTreino.intervalo) clearInterval(sessaoTreino.intervalo);
  sessaoTreino.treino = {
    nome: treino.nome,
    nivel: treino.nivel,
    descricao: treino.descricao || '',
    exercicios: treino.exercicios.map(ex => ({...ex, concluido: false}))
  };
  sessaoTreino.modoOrigem = modoOrigem;
  sessaoTreino.inicio = Date.now();

  if($('#passo1')){
    $('#passo1').style.display = 'none';
    $('#secaoProntos').style.display = 'none';
    $('#secaoCriar').style.display = 'none';
    $('#secaoAgenda').style.display = 'none';
  }
  if($('#agendaPessoal')) $('#agendaPessoal').hidden = true;
  if($('#progressoPessoal')) $('#progressoPessoal').hidden = true;
  $('#sessaoTreino').hidden = false;
  $('#sessaoAndamento').hidden = false;
  $('#resumoTreino').hidden = true;
  $('#sessaoNome').textContent = sessaoTreino.treino.nome;
  $('#sessaoNivel').textContent = `Nível ${sessaoTreino.treino.nivel}`;
  $('#sessaoDescricao').textContent = sessaoTreino.treino.descricao || 'Faça os exercícios no seu ritmo e marque cada um ao concluir.';
  $('#sessaoTempo').textContent = '00:00';
  renderizarExerciciosSessao();
  sessaoTreino.intervalo = setInterval(atualizarRelogioSessao, 1000);
  $('#sessaoTreino').scrollIntoView({behavior:'smooth'});
}

function iniciarTreinoPronto(card){
  mostrarSessao(treinoProntoDoCard(card), 'prontos');
}

function finalizarSessao(){
  const treino = sessaoTreino.treino;
  if(!treino) return;
  if(sessaoTreino.intervalo){
    clearInterval(sessaoTreino.intervalo);
    sessaoTreino.intervalo = null;
  }
  atualizarRelogioSessao();

  const total = treino.exercicios.length;
  const concluidos = treino.exercicios.filter(ex => ex.concluido).length;
  const progresso = total ? Math.round(concluidos / total * 100) : 0;
  const grupos = {};
  treino.exercicios.filter(ex => ex.concluido).forEach(ex => {
    const categoria = EX[ex.nome]?.cat || 'Habilidades';
    grupos[categoria] = (grupos[categoria] || 0) + 1;
  });
  const registro = {
    nome: treino.nome,
    data: new Date().toISOString(),
    duracao: Math.floor((Date.now() - sessaoTreino.inicio) / 1000),
    concluidos,
    total,
    grupos
  };
  state.historico.unshift(registro);
  if(!salvarDados()) state.historico.shift();
  renderizarHistorico();

  $('#resumoDuracao').textContent = $('#sessaoTempo').textContent;
  $('#resumoConcluidos').textContent = `${concluidos} / ${total}`;
  $('#resumoProgresso').textContent = `${progresso}%`;
  $('#resumoExercicios').innerHTML = treino.exercicios.map(ex => `
    <li class="${ex.concluido ? 'feito' : 'nao-feito'}">
      <span>${esc(ex.nome)}</span>
      <b>${ex.concluido ? 'Concluído' : 'Não concluído'}</b>
    </li>`).join('');
  $('#sessaoAndamento').hidden = true;
  $('#resumoTreino').hidden = false;
  $('#sessaoTreino').scrollIntoView({behavior:'smooth'});
}

function renderizarHistorico(){
  const lista = $('#historicoTreinos');
  const grafico = $('#graficoGrupos');
  if(!lista || !grafico) return;

  if(!state.historico.length){
    lista.innerHTML = '<p class="vazio">Seus treinos finalizados aparecerão aqui.</p>';
  } else {
    lista.innerHTML = state.historico.map(item => {
      const data = new Date(item.data);
      const dataFormatada = Number.isNaN(data.getTime())
        ? 'Data indisponível'
        : data.toLocaleString('pt-BR', {dateStyle:'medium', timeStyle:'short'});
      const progresso = item.total ? Math.round(item.concluidos / item.total * 100) : 0;
      return `
        <article class="historico-item">
          <div>
            <b>${esc(item.nome)}</b>
            <span>${esc(dataFormatada)}</span>
          </div>
          <span>${formatarDuracao(item.duracao)} · ${item.concluidos}/${item.total} exercícios · ${progresso}%</span>
        </article>`;
    }).join('');
  }

  const categorias = ['Push', 'Pull', 'Pernas', 'Abdômen', 'Habilidades'];
  const totais = categorias.map(nome => state.historico.reduce(
    (soma, item) => soma + (Number(item.grupos[nome]) || 0), 0
  ));
  const maior = Math.max(...totais, 1);
  const centro = 150;
  const raio = 88;
  const angulo = indice => -Math.PI / 2 + indice * Math.PI * 2 / categorias.length;
  const coordenadas = (valor, indice, escala = 1) => {
    const a = angulo(indice);
    const distancia = raio * escala * valor;
    return `${centro + Math.cos(a) * distancia},${centro + Math.sin(a) * distancia}`;
  };
  const contorno = escala => categorias.map((_, i) => coordenadas(1, i, escala)).join(' ');
  const pontos = categorias.map((_, i) => coordenadas(totais[i] / maior, i)).join(' ');
  const nomes = categorias.map((nome, i) => {
    const a = angulo(i);
    const x = centro + Math.cos(a) * 122;
    const y = centro + Math.sin(a) * 122 + 4;
    return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle">${esc(nome)}</text>`;
  }).join('');
  const pontosDados = categorias.map((_, i) => {
    const [x, y] = coordenadas(totais[i] / maior, i).split(',');
    return `<circle cx="${x}" cy="${y}" r="4" />`;
  }).join('');
  const eixos = categorias.map((_, i) => {
    const [x, y] = coordenadas(1, i).split(',');
    return `<line class="radar-eixo" x1="${centro}" y1="${centro}" x2="${x}" y2="${y}" />`;
  }).join('');
  const legenda = categorias.map((nome, i) =>
    `<li><span>${esc(nome)}</span><b>${totais[i]}</b></li>`
  ).join('');

  grafico.innerHTML = `
    <div class="grafico-radar">
      <svg viewBox="0 0 300 300" role="img" aria-label="Gráfico pentagonal dos exercícios concluídos por grupo muscular">
        <title>Grupos musculares trabalhados</title>
        ${[.25,.5,.75,1].map(escala => `<polygon class="radar-grade" points="${contorno(escala)}" />`).join('')}
        ${eixos}
        <polygon class="radar-dados" points="${pontos}" />
        ${pontosDados}
        ${nomes}
      </svg>
      <ul class="radar-legenda">${legenda}</ul>
    </div>`;
}

function voltarAosTreinos(){
  if(sessaoTreino.intervalo){
    clearInterval(sessaoTreino.intervalo);
    sessaoTreino.intervalo = null;
  }
  sessaoTreino.treino = null;
  if(!$('#passo1')){
    window.location.assign('Exercicios.html');
    return;
  }
  $('#sessaoTreino').hidden = true;
  $('#passo1').style.display = '';
  const botaoModo = $(`#passo1 .opcao[data-modo="${sessaoTreino.modoOrigem}"]`);
  if(botaoModo) botaoModo.click();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function iniciarUsarPronto(){
  const lista = $('#listaProntos');
  if(!lista) return;

  $$('[data-acao="usar-pronto"]').forEach(btn => {
    btn.textContent = 'Iniciar treino';
    const agendarBtn = document.createElement('button');
    agendarBtn.type = 'button';
    agendarBtn.className = 'btn';
    agendarBtn.dataset.acao = 'agendar-pronto';
    agendarBtn.textContent = 'Adicionar à agenda';
    const acoes = document.createElement('div');
    acoes.className = 'tp-acoes';
    btn.before(acoes);
    acoes.append(btn, agendarBtn);
    btn.addEventListener('click', () => {
      const card = btn.closest('.treino-pronto');
      if(card) iniciarTreinoPronto(card);
    });
  });

  lista.addEventListener('click', e => {
    const btn = e.target.closest('[data-acao="agendar-pronto"]');
    if(!btn) return;
    const card = btn.closest('.treino-pronto');
    if(card) abrirAgendamento(treinoProntoDoCard(card));
  });
}

function treinoProntoDoCard(card){
  const info = card.querySelector('.tp-info').textContent;
  const series = Number(info.match(/Séries:\s*(\d+)/i)?.[1]) || 3;
  const reps = info.match(/Reps:\s*([\d-]+)/i)?.[1] || '';
  return {
    nome: card.querySelector('.tp-head h3').textContent.trim(),
    tipo: 'pronto',
    nivel: card.dataset.nivel,
    descricao: card.querySelector('.tp-desc').textContent.trim(),
    exercicios: Array.from(card.querySelectorAll('.tp-exercicios li'), item => ({
      nome: item.textContent.trim(),
      series,
      reps
    }))
  };
}

/* ---------------------------------------------------------
   7) PASSO 2B — CRIAR MEU TREINO
   --------------------------------------------------------- */
function renderExercicioCriar(ex, idx){
  const info = EX[ex.nome] || {cat:'Push', n:2, exec:'—', dicas:'—', obj:'—'};
  return `
    <div class="ex" data-idx="${idx}">
      <div class="ex-top">
        <span class="ex-nome">${esc(ex.nome)}</span>
        <span class="tag ${tagCat(info.cat)}">${info.cat}</span>
        <span class="tag">N${info.n}</span>
        <button class="btn-ico" data-acao="del-ex-criar" title="Remover">✕</button>
      </div>
      <p class="ex-exec"><b>Execução:</b> ${esc(info.exec)}</p>
      <details class="ex-det">
        <summary>Dicas de execução e objetivo</summary>
        <p>${esc(info.dicas)}</p>
        <p class="mut"><b>Objetivo:</b> ${esc(info.obj)}</p>
      </details>
      <div class="ex-campos">
        <label>Séries
          <input type="number" min="1" value="${ex.series}" data-campo="series">
        </label>
        <label>Reps
          <input value="${esc(ex.reps)}" data-campo="reps">
        </label>
        <label>Descanso (s)
          <input type="number" min="0" step="15" value="${ex.descanso}" data-campo="descanso">
        </label>
      </div>
    </div>`;
}

function renderCriarExercicios(){
  const wrap = $('#criarExercicios');
  if(!wrap) return;
  if(!state.treinoSendoCriado.length){
    wrap.innerHTML = '<p class="vazio">Nenhum exercício ainda. Escolha abaixo e clique em adicionar.</p>';
    return;
  }
  wrap.innerHTML = state.treinoSendoCriado.map(renderExercicioCriar).join('');
}

function iniciarCriarTreino(){
  const btnAdd   = $('[data-acao="add-ex-criar"]');
  const btnSalvar= $('[data-acao="salvar-criar"]');
  const select   = $('#criarAddSelect');
  const wrap     = $('#criarExercicios');
  const meusTreinos = $('#meusTreinos');

  if(!btnAdd || !btnSalvar) return;

  /* Adicionar exercício */
  btnAdd.addEventListener('click', () => {
    const nome = select.value;
    if(!nome) return;
    state.treinoSendoCriado.push({nome, series:3, reps:'10-15', descanso:180});
    renderCriarExercicios();
  });

  /* Remover exercício + editar campos */
  wrap.addEventListener('click', e => {
    const btn = e.target.closest('[data-acao="del-ex-criar"]');
    if(!btn) return;
    const idx = +btn.closest('.ex').dataset.idx;
    state.treinoSendoCriado.splice(idx, 1);
    renderCriarExercicios();
  });

  meusTreinos.addEventListener('click', e => {
    const iniciarBtn = e.target.closest('[data-acao="treinar-criado"]');
    const agendarBtn = e.target.closest('[data-acao="agendar-criado"]');
    const idx = Number((iniciarBtn || agendarBtn)?.dataset.idx);
    if(!Number.isInteger(idx)) return;
    const treino = state.meusTreinos.filter(item => item.tipo === 'criado')[idx];
    if(!treino) return;
    if(iniciarBtn) mostrarSessao(treino, 'criar');
    if(agendarBtn) abrirAgendamento(treino);
  });

  wrap.addEventListener('change', e => {
    const inp = e.target;
    if(!inp.dataset.campo) return;
    const idx = +inp.closest('.ex').dataset.idx;
    const campo = inp.dataset.campo;
    state.treinoSendoCriado[idx][campo] =
      campo === 'reps' ? inp.value : (+inp.value || 0);
  });

  /* Salvar treino */
  btnSalvar.addEventListener('click', () => {
    const campoNome = $('#criarNome');
    const nome = campoNome.value.trim();
    if(!nome){
      campoNome.setCustomValidity('Dê um nome para o treino.');
      campoNome.reportValidity();
      campoNome.addEventListener('input', () => campoNome.setCustomValidity(''), {once:true});
      return;
    }
    if(!state.treinoSendoCriado.length){
      alert('Adicione pelo menos um exercício antes de salvar.');
      return;
    }
    const treinoCriado = {
      nome,
      tipo: 'criado',
      nivel: $('#criarNivel').value,
      foco : $('#criarFoco').value,
      exercicios: state.treinoSendoCriado.map(x => ({...x}))
    };
    state.meusTreinos.push({
      ...treinoCriado
    });
    if(!salvarDados()){
      state.meusTreinos.pop();
      return;
    }
    state.treinoSendoCriado = [];
    campoNome.value = '';
    renderCriarExercicios();
    atualizarListaMeusTreinos();
    atualizarModalMeusTreinos();
    alert(`Treino "${nome}" salvo! Você pode iniciá-lo em "Meus treinos criados" ou agendá-lo na agenda.`);
  });

  renderCriarExercicios();
}

/* ---------------------------------------------------------
   8) LISTA "MEUS TREINOS CRIADOS"
   --------------------------------------------------------- */
function atualizarListaMeusTreinos(){
  const wrap = $('#meusTreinos');
  if(!wrap) return;

  const criados = state.meusTreinos.filter(t => t.tipo === 'criado');
  if(!criados.length){
    wrap.innerHTML = '<p class="vazio">Nenhum treino criado ainda. Monte o seu acima e clique em salvar.</p>';
    return;
  }
  wrap.innerHTML = criados.map((t, i) => `
    <div class="meu-treino">
      <b>${esc(t.nome)}</b>
      <span>Nível ${esc(t.nivel)} · ${t.exercicios.length} exercício(s)</span>
      <button class="btn primary" data-acao="treinar-criado" data-idx="${i}">Treinar agora</button>
      <button class="btn" data-acao="agendar-criado" data-idx="${i}">Adicionar à agenda</button>
      <button class="btn-ico" data-acao="del-meu-treino" data-idx="${i}" title="Excluir">✕</button>
    </div>`).join('');

  wrap.querySelectorAll('[data-acao="del-meu-treino"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.idx;
      const alvo = criados[idx];
      // Se estiver agendado, remove da agenda
      DIAS.forEach(d => {
        if(state.agenda[d] && state.agenda[d].nome === alvo.nome){
          state.agenda[d] = null;
          atualizarSlot(d);
        }
      });
      state.meusTreinos = state.meusTreinos.filter(t => t !== alvo);
      salvarDados();
      atualizarListaMeusTreinos();
      atualizarModalMeusTreinos();
    });
  });
}

/* ---------------------------------------------------------
   9) VISTA SEMANAL / MENSAL
   --------------------------------------------------------- */
function iniciarVista(){
  const botoes = $$('[data-vista]');
  if(botoes[0]) botoes[0].classList.add('sel');

  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      state.vista = btn.dataset.vista;
      const sem = state.vista === 'semanal';
      $('#vistaSemanal').style.display = sem ? '' : 'none';
      $('#vistaMensal').style.display  = sem ? 'none' : '';
      botoes.forEach(b => b.classList.toggle('sel', b === btn));
      if(!sem) renderCalendario();
    });
  });

  $('#vistaMensal').style.display = 'none';
}

/* ---------------------------------------------------------
   10) MODAL DE ESCOLHA DE TREINO
   --------------------------------------------------------- */
function abrirModal(dia){
  state.diaSelecionado = dia;
  atualizarModalMeusTreinos();
  $('#modalTreino').style.display = 'flex';
}

function fecharModal(){
  $('#modalTreino').style.display = 'none';
  state.diaSelecionado = null;
}

function atualizarModalMeusTreinos(){
  const wrap = $('#modalMeusTreinos');
  if(!wrap) return;

  const criados = state.meusTreinos.filter(t => t.tipo === 'criado');
  if(!criados.length){
    wrap.innerHTML = '<p class="vazio">Você ainda não criou nenhum treino.</p>';
    return;
  }
  wrap.innerHTML = criados.map(t => `
    <button class="item-treino" data-treino="${esc(t.nome)}" data-tipo="criado">
      <b>${esc(t.nome)}</b>
      <span>Nível ${esc(t.nivel)} · ${t.exercicios.length} exercício(s)</span>
    </button>`).join('');
}

function abrirAgendamento(treino){
    state.treinoAgendando = treino;
    $('#tituloModalAgendar').textContent = treino.nome;
    $('#diasAgendamento').innerHTML = DIAS_SEMANA.map(dia => {
      const atual = state.agenda[dia];
      return `
        <label class="dia-agendamento">
          <input type="checkbox" value="${dia}" data-dia-agendar ${atual?.nome === treino.nome ? 'checked' : ''}>
          <span>${NOMES_DIAS[dia]}</span>
          <small>${atual ? `Agenda atual: ${esc(atual.nome)}` : 'Livre'}</small>
        </label>`;
    }).join('');
    const modal = $('#modalAgendarTreino');
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('[data-acao="fechar-agendamento"]').focus();
}

function fecharAgendamento(){
    const modal = $('#modalAgendarTreino');
    if(!modal) return;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    state.treinoAgendando = null;
}

function confirmarAgendamento(){
    if(!state.treinoAgendando) return;
    const dias = $$('[data-dia-agendar]:checked').map(input => input.value);
    if(!dias.length){
      alert('Selecione pelo menos um dia para adicionar este treino à agenda.');
      return;
    }

    const conflitos = dias.filter(dia =>
      state.agenda[dia] && state.agenda[dia].nome !== state.treinoAgendando.nome
    );
    if(conflitos.length){
      const nomes = conflitos.map(dia =>
        `${NOMES_DIAS[dia]} (${state.agenda[dia].nome})`
      ).join(', ');
      if(!confirm(`Os dias ${nomes} já têm treinos. Deseja substituí-los?`)) return;
    }

    const agendaAnterior = {...state.agenda};
    dias.forEach(dia => {
      state.agenda[dia] = {
        ...state.treinoAgendando,
        exercicios: state.treinoAgendando.exercicios.map(ex => ({...ex}))
      };
    });
    if(!salvarDados()){
      state.agenda = agendaAnterior;
      return;
    }
    DIAS.forEach(atualizarSlot);
    renderCalendario();
    renderizarAgendaPessoal();
    fecharAgendamento();
}

function iniciarAgendamento(){
    const modal = $('#modalAgendarTreino');
    if(!modal) return;
    modal.addEventListener('click', e => {
      if(e.target === modal) fecharAgendamento();
    });
    $$('[data-acao="fechar-agendamento"]').forEach(btn =>
      btn.addEventListener('click', fecharAgendamento));
    $('[data-acao="confirmar-agendamento"]')?.addEventListener('click', confirmarAgendamento);
    document.addEventListener('keydown', e => {
      if(e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false'){
        fecharAgendamento();
      }
    });
}

function iniciarModal(){
  /* Abrir ao clicar em "+" de cada dia */
  $$('[data-acao="atribuir"]').forEach(btn => {
    btn.addEventListener('click', () => abrirModal(btn.dataset.dia));
  });

  /* Fechar */
  $$('[data-acao="fechar-modal"]').forEach(b => b.addEventListener('click', fecharModal));
  $('#modalTreino').addEventListener('click', e => {
    if(e.target.id === 'modalTreino') fecharModal();
  });

  /* Escolher treino no modal */
  $('#modalLista').addEventListener('click', e => {
    const item = e.target.closest('.item-treino');
    if(!item) return;
    const nome = item.dataset.treino;
    const tipo = item.dataset.tipo;
    const dia  = state.diaSelecionado;
    if(!dia) return;

    if(tipo === 'descanso' || !nome){
      state.agenda[dia] = null;
    } else {
      let treinoAgendado;
      if(tipo === 'criado'){
        const treino = state.meusTreinos.find(item => item.nome === nome && item.tipo === 'criado');
        if(treino){
          treinoAgendado = {
            nome: treino.nome,
            tipo: treino.tipo,
            nivel: treino.nivel,
            descricao: `Treino personalizado · foco: ${treino.foco}`,
            exercicios: treino.exercicios.map(ex => ({...ex}))
          };
        }
      } else {
        const card = $$('#listaProntos .treino-pronto').find(item =>
          item.querySelector('.tp-head h3').textContent.trim() === nome);
        if(card){
          const info = card.querySelector('.tp-info').textContent;
          const series = Number(info.match(/Séries:\s*(\d+)/i)?.[1]) || 3;
          const reps = info.match(/Reps:\s*([\d-]+)/i)?.[1] || '';
          treinoAgendado = {
            nome,
            tipo: 'pronto',
            nivel: card.dataset.nivel,
            descricao: card.querySelector('.tp-desc').textContent.trim(),
            exercicios: Array.from(card.querySelectorAll('.tp-exercicios li'), item => ({
              nome: item.textContent.trim(),
              series,
              reps
            }))
          };
        }
      }

      if(!treinoAgendado){
        alert('Não foi possível encontrar esse treino. Atualize a página e tente novamente.');
        return;
      }
      state.agenda[dia] = treinoAgendado;
    }
    salvarDados();
    atualizarSlot(dia);
    fecharModal();
  });
}

/* ---------------------------------------------------------
   11) SLOTS DA AGENDA SEMANAL
   --------------------------------------------------------- */
function atualizarSlot(dia){
  const slot = document.querySelector(`.slot-treino[data-dia="${dia}"]`);
  if(!slot) return;
  const t = state.agenda[dia];
  if(!t){
    slot.textContent = 'Descanso';
    slot.classList.add('vazio');
    slot.classList.remove('treinado');
  } else {
    slot.textContent = t.nome;
    slot.classList.remove('vazio');
    slot.classList.add('treinado');
  }
}

function renderizarAgendaPessoal(){
  const wrap = $('#listaAgendaPessoal');
  if(!wrap) return;

  const hoje = DIAS_SEMANA[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1];
  wrap.innerHTML = DIAS_SEMANA.map(dia => {
    const treino = state.agenda[dia];
    const diaHoje = dia === hoje;
    return `
      <article class="agenda-pessoal-dia ${diaHoje ? 'hoje' : ''} ${treino ? 'tem-treino' : 'dia-descanso'}">
        <div class="agenda-pessoal-dia-nome">
          <h3>${NOMES_DIAS[dia]}</h3>
          ${diaHoje ? '<span class="tag-hoje">Hoje</span>' : ''}
        </div>
        ${treino
          ? `<div class="agenda-pessoal-info">
              <b>${esc(treino.nome)}</b>
              <span>${treino.nivel ? `Nível ${esc(treino.nivel)} · ` : ''}${treino.exercicios.length} exercícios</span>
            </div>
            <button class="btn primary" data-acao="iniciar-agenda" data-dia="${dia}">Iniciar treino</button>`
          : `<p class="agenda-pessoal-descanso">Dia de descanso</p>
             <a class="btn agenda-pessoal-editar" href="Exercicios.html">Adicionar treino</a>`}
      </article>`;
  }).join('');
}

function mostrarAgendaPessoal(){
  if(!$('#agendaPessoal')) return;
  $('#sessaoTreino').hidden = true;
  $('#agendaPessoal').hidden = false;
  if($('#progressoPessoal')) $('#progressoPessoal').hidden = false;
  renderizarAgendaPessoal();
  renderizarHistorico();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function limparAgenda(){
  if(!confirm('Tem certeza que quer limpar toda a agenda?')) return;
  DIAS.forEach(d => {
    state.agenda[d] = null;
    atualizarSlot(d);
  });
  salvarDados();
  renderCalendario();
}

/* ---------------------------------------------------------
   12) CALENDÁRIO MENSAL
   --------------------------------------------------------- */
function renderCalendario(){
  const wrap = $('#calDias');
  if(!wrap) return;

  const mes = +$('#agendaMes').value - 1;   // 0 = Janeiro
  const ano = +$('#agendaAno').value;
  const primeiro = new Date(ano, mes, 1);
  const ultimoDia = new Date(ano, mes + 1, 0).getDate();
  const inicioSemana = primeiro.getDay();   // 0 = Domingo

  const celulas = [];

  // Células vazias antes do dia 1
  for(let i = 0; i < inicioSemana; i++){
    celulas.push(`<div class="cal-dia vazio"></div>`);
  }

  // Dias do mês
  for(let d = 1; d <= ultimoDia; d++){
    const dow = new Date(ano, mes, d).getDay();
    const chave = DIAS[dow];
    const treino = state.agenda[chave];
    celulas.push(`
      <div class="cal-dia ${treino ? 'tem-treino' : ''}">
        <span class="cal-num">${d}</span>
        ${treino ? `<span class="cal-treino">${esc(treino.nome)}</span>` : ''}
      </div>`);
  }

  wrap.innerHTML = celulas.join('');
}

function iniciarCalendario(){
  const mesEl = $('#agendaMes');
  const anoEl = $('#agendaAno');
  if(mesEl) mesEl.addEventListener('change', renderCalendario);
  if(anoEl) anoEl.addEventListener('change', renderCalendario);
}

/* ---------------------------------------------------------
   13) AÇÕES GERAIS (imprimir / limpar)
   --------------------------------------------------------- */
function iniciarAcoesGerais(){
  $$('[data-acao="imprimir"]').forEach(b =>
    b.addEventListener('click', () => window.print()));

  $$('[data-acao="limpar-agenda"]').forEach(b =>
    b.addEventListener('click', limparAgenda));

  iniciarControlesSessao();
}

function iniciarControlesSessao(){
  $('#listaSessao')?.addEventListener('click', e => {
    const btn = e.target.closest('[data-acao="marcar-exercicio"]');
    if(!btn || !sessaoTreino.treino) return;
    const ex = sessaoTreino.treino.exercicios[Number(btn.dataset.idx)];
    if(!ex) return;
    ex.concluido = !ex.concluido;
    renderizarExerciciosSessao();
  });
  $$('[data-acao="finalizar-sessao"]').forEach(btn =>
    btn.addEventListener('click', finalizarSessao));
  $$('[data-acao="sair-sessao"], [data-acao="novo-treino"]').forEach(btn =>
    btn.addEventListener('click', voltarAosTreinos));
  $$('[data-acao="voltar-agenda"]').forEach(btn =>
    btn.addEventListener('click', mostrarAgendaPessoal));
}

function iniciarPaginaTreino(){
  const section = $('#sessaoTreino');
  const agenda = $('#agendaPessoal');
  renderizarAgendaPessoal();
  renderizarHistorico();
  iniciarControlesSessao();
  $('#listaAgendaPessoal')?.addEventListener('click', e => {
    const btn = e.target.closest('[data-acao="iniciar-agenda"]');
    if(!btn) return;
    const treino = state.agenda[btn.dataset.dia];
    if(treino) mostrarSessao(treino, 'agenda');
  });

  const dados = new URLSearchParams(window.location.search).get('treino');

  if(!dados) return;

  let treino;
  try {
    treino = JSON.parse(dados);
  } catch (error) {
    console.error('Não foi possível ler os dados do treino recebido.', error);
    alert('Os dados do treino estão inválidos. Volte à lista e inicie o treino novamente.');
    return;
  }

  if(!treino || typeof treino.nome !== 'string' || !Array.isArray(treino.exercicios) || treino.exercicios.length === 0){
    alert('Este treino não tem exercícios válidos. Volte à lista e escolha outro treino.');
    return;
  }

  sessaoTreino.treino = {
    nome: treino.nome,
    nivel: String(treino.nivel || 'Personalizado'),
    descricao: typeof treino.descricao === 'string' ? treino.descricao : '',
    exercicios: treino.exercicios
      .filter(ex => ex && typeof ex.nome === 'string' && ex.nome.trim())
      .map(ex => ({...ex, concluido: false}))
  };
  if(!sessaoTreino.treino.exercicios.length){
    alert('Este treino não contém exercícios válidos. Volte à lista e escolha outro treino.');
    return;
  }

  sessaoTreino.inicio = Date.now();
  $('#sessaoNome').textContent = sessaoTreino.treino.nome;
  $('#sessaoNivel').textContent = `Nível ${sessaoTreino.treino.nivel}`;
  $('#sessaoDescricao').textContent = sessaoTreino.treino.descricao || 'Faça os exercícios no seu ritmo e marque cada um ao concluir.';
  renderizarExerciciosSessao();
  section.hidden = false;
  agenda.hidden = true;
  if($('#progressoPessoal')) $('#progressoPessoal').hidden = true;
  sessaoTreino.intervalo = setInterval(atualizarRelogioSessao, 1000);

  const urlLimpa = new URL(window.location.href);
  urlLimpa.searchParams.delete('treino');
  history.replaceState(null, '', urlLimpa.href);
}

/* ---------------------------------------------------------
   14) INICIALIZAÇÃO
   --------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  if(document.getElementById('sessaoTreino') && !document.getElementById('passo1')){
    iniciarPaginaTreino();
    return;
  }
  if(!document.getElementById('passo1')){
    return;
  }
  iniciarModo();
  iniciarFiltroProntos();
  iniciarUsarPronto();
  iniciarCriarTreino();
  iniciarVista();
  iniciarModal();
  iniciarAgendamento();
  iniciarCalendario();
  iniciarAcoesGerais();

  atualizarListaMeusTreinos();
  atualizarModalMeusTreinos();
  DIAS.forEach(d => atualizarSlot(d));
});