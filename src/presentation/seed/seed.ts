export interface FrequentQuestion {
  question: string;
  answer: string;
}
export interface SeedProduct {
  title: string;
  slug: string;
  price: number;
  images: string[];
  net_weight?: number;
  capacity?: number;
  benefits?: string[];
  usage?: string[];
  description: string;
  frequent_questions: FrequentQuestion[];
}

export interface SeedDate {
  products: SeedProduct[];
}

export const initialState: SeedDate = {
  products: [
    {
      description:
        'Nuestro aceite de semilla de uva de altura, extraído por prensado en frío, es el primero en su clase producido en Bolivia. Rico en ácidos grasos omega 6 y omega 3, vitamina E, flavonoides y resveratrol, combate el envejecimiento de la piel, mejora la circulación y aumenta la elasticidad. Perfecto para masajes corporales y como hidratante capilar, repara puntas abiertas, reduce el frizz y el encrespamiento. Descubre la belleza natural de Bolivia en cada gota.',
      images: [
        'aceite-de-semilla-de-uva-de-altura-1.png',
        'aceite-de-semilla-de-uva-de-altura-2.png',
        'aceite-de-semilla-de-uva-de-altura-3.png'
      ],
      net_weight: 38,
      capacity: 10,
      benefits: [
        'Cuida tu piel del envejecimiento y de los radicales libres.',
        'Posee una alta cantidad de vitamina E, flavanoides y resveratrol.',
        'Es humectante, emoliente y protector',
        'La piel lo absorbe fácilmente, puede reemplazar la crema humectante sin dejar sensación grasosa.',
        'La piel lo absorbe fácilmente, puede reemplazar la crema humectante sin dejar sensación grasosa.',
        'Ayuda a combatir y reducir la celulitis.',
        'Combina ácidos grasos como el omega 6 y el omega 9 por lo que ayuda a la síntesis de colágeno y elastina en la piel, aportando regeneración y longevidad.',
        'Fortalece la piel, manteniéndola tersa y suave.',
        'Tiene propiedades para combatir las arrugas profundas.',
        'Es un aceite ideal para el cuidado de las manos.',
        'Sirve también como aftershave (después del afeitado).',
        'Por su textura ligera y aroma sutil es ideal para usar como aceite vehicular en masajes.'
      ],
      usage: [
        'Rejuvenecedor facial: Disfruta de las propiedades rejuvenecedoras aplicando unas cuantas gotas en tu rostro y masajea suavemente. Piel Normal a Seca: Aplica de 4 a 6 gotas. Piel Grasa: Comienza con 2 a 4 gotas y ajusta según sea necesario.',
        'Hidratación facial: Aplica unas gotas en tu rostro como humectante, masajeando suavemente. Es adecuado para todo tipo de piel y no obstruirá los poros (2 - 3 gotas por día). ',
        'Masaje corporal: Utiliza el aceite para masajes corporales, ya que es ligero y se absorbe fácilmente (10-15 gotas por día dependiendo el área que deseas aplicar). ',
        'Cuidado capilar: Puedes aplicarlo en las puntas del cabello como acondicionador o dejarlo actuar como mascarilla capilar antes de lavarlo (5-10 gotas por día tanto para aplicación en puntas o en mascarillas capitales). ',
        'Tratamiento de uñas: Masajea unas gotas en tus uñas y cutículas para fortalecerlas (1-2 gotas por día por cada uña y cutícula).  '
      ],
      frequent_questions: [
        {
          question: '¿CUÁL ES LA DIFERENCIA ENTRE LOS ACEITES ESENCIALES Y VEGETALES?',
          answer:
            'Con frecuencia nos preguntan acerca de la diferencia entre los aceites esenciales y los aceites vegetales, ingredientes fundamentales en la cosmética natural y en la formulación de muchos productos ecológicos para el cuidado personal, por sus múltiples beneficios para la salud.Aunque ambos tipos de sustancias provienen de elementos naturales como plantas, semillas y frutas, los métodos de extracción aplicados dan como resultado composiciones químicas y aplicaciones cosméticas diferentes.A simple vista se puede observar que el aceite esencial es más líquido que el aceite vegetal, esto se debe a que el aceite esencial en realidad no es un aceite propiamente, sino una concentración de las sustancias aromáticas volátiles de las plantas y un aceite vegetal es un líquido graso extraído de las semillas, frutas o nueces de plantas.Ambos tipos de aceites suelen usarse juntos en aromaterapia, en masajes corporales y en la elaboración de cosméticos naturales. La complementación de unos y otros permite formular mezclas simples y personalizadas para cada tipo de piel, necesidad o molestia.'
        }
      ],
      price: 32,
      title: 'ACEITE DE SEMILLA DE UVA DE ALTURA',
      slug: 'aceite-de-semilla-de-uva-de-altura'
    },
    {
      description:
        'El aceite de almendra amazónica es un tesoro natural para el cuidado de la piel. Elaborado únicamente con nueces de castaña (Bertholetia Excelsa) de la selva amazónica boliviana mediante prensado en frío, este aceite ofrece una hidratación intensa, dejando la piel suave y nutrida. Sus beneficios en el uso cosmético incluyen propiedades antioxidantes que ayudan a combatir el envejecimiento prematuro, fortalecimiento del cabello, mejora de la elasticidad y una sensación general de bienestar. ¡Descubre la belleza de la naturaleza con el aceite de almendra amazónica!',
      images: ['aceite-de-almendra-amazonica-1.png'],
      capacity: 60,
      benefits: [
        'El aceite de almendra amazónica es rico en ácidos grasos esenciales, como el ácido linoleico y el ácido oleico, que ayudan a mantener la piel hidratada y suave.',
        'Contiene compuestos con propiedades antiinflamatorias que pueden ayudar a calmar la piel irritada y reducir la inflamación.',
        'Este aceite es una fuente natural de antioxidantes, como la vitamina E, que ayuda a combatir los radicales libres y contribuye a prevenir el envejecimiento prematuro de la piel.',
        'Puede ayudar a mejorar la elasticidad de la piel, lo que es beneficioso para mantener una apariencia firme y tonificada.',
        'Es suave y adecuado para pieles sensibles, lo que lo convierte en una opción versátil para diversos tipos de piel.',
        'El uso regular del aceite de almendra amazónica puede mejorar el brillo natural del cabello y proporcionarle una textura suave.',
        'Sus nutrientes, incluidas las proteínas y la vitamina E, ayudan a fortalecer el cabello, reduciendo la fragilidad y las puntas abiertas.'
      ],
      usage: [
        'Hidratación corporal: Después de la ducha, con la piel aun ligeramente húmeda, aplica de 10 a 15 gotas en todo el cuerpo.',
        'Masaje Relajante: Para un masaje, utiliza alrededor de 10 gotas y ajusta según la duración y preferencia.',
        'Cuidado de Uñas y Cutículas: Aplica 1-2 gotas en cada uña y cutícula.',
        'Desmaquillante Natural: Utiliza 4-6 gotas para desmaquillar el rostro.',
        'Tratamiento para Pies: Aplica de 5 a 10 gotas en cada pie antes de dormir.',
        'Mezcla con Aceites Esenciales: Agrega 2-3 gotas de aceite esencial por cada 10 gotas de aceite de almendra amazónica.',
        'Cuidado Prenatal: Para prevenir estrías, aplica de 10 a 15 gotas en áreas propensas como el abdomen.'
      ],
      frequent_questions: [
        {
          question: '¿CUÁL ES LA DIFERENCIA ENTRE LOS ACEITES ESENCIALES Y VEGETALES?',
          answer:
            'Con frecuencia nos preguntan acerca de la diferencia entre los aceites esenciales y los aceites vegetales, ingredientes fundamentales en la cosmética natural y en la formulación de muchos productos ecológicos para el cuidado personal, por sus múltiples beneficios para la salud.Aunque ambos tipos de sustancias provienen de elementos naturales como plantas, semillas y frutas, los métodos de extracción aplicados dan como resultado composiciones químicas y aplicaciones cosméticas diferentes.A simple vista se puede observar que el aceite esencial es más líquido que el aceite vegetal, esto se debe a que el aceite esencial en realidad no es un aceite propiamente, sino una concentración de las sustancias aromáticas volátiles de las plantas y un aceite vegetal es un líquido graso extraído de las semillas, frutas o nueces de plantas.Ambos tipos de aceites suelen usarse juntos en aromaterapia, en masajes corporales y en la elaboración de cosméticos naturales. La complementación de unos y otros permite formular mezclas simples y personalizadas para cada tipo de piel, necesidad o molestia.'
        }
      ],
      price: 22,
      title: 'ACEITE DE ALMENDRA AMAZÓNICA',
      slug: 'aceite-de-almendra-amazonica'
    },
    {
      description:
        'El aceite esencial de Romero (Rosmarinus officinalis) presenta un aroma fresco, herbáceo, dulce y ligeramente medicinal. Con propiedades energizantes, puede ser beneficioso para restaurar el estado de alerta mental, especialmente en situaciones de fatiga. Además, es un ingrediente popular en productos de cuidado de la piel y el cabello. Se aconseja diluir este aceite antes de su uso y su aplicación está recomendada exclusivamente para adultos. ¡Aprovecha sus beneficios con precaución y disfruta de sus propiedades revitalizantes!',
      images: ['aceite-esencial-de-romero-1.png'],
      capacity: 10,
      benefits: [
        'Estimula la memoria y concentración. Ideal para épocas de estudio.',
        'Ingrediente popular en productos para el cuidado de la piel y el cabello.',
        'Analgésico, antiinflamatorio, tonificador cutáneo, prepara el músculo para exigencias físicas.',
        'Reduce problemas de caspa y caída del cabello, da vida al color perdido.',
        'Beneficioso para ayudar a restaurar el estado de alerta mental cuando experimenta fatiga.',
        'Gran capacidad vigorizante, estimula la circulación sanguínea.',
        'Ayuda con molestias respiratorias.'
      ],
      usage: [
        'Alivio del dolor o reducir inflamaciones: 2 gotas en una cucharada de aceite vehicular, masajear la zona afectada hasta 3 veces al día. Puede acompañarse con aceite esencial de menta.',
        'Molestias respiratorias: Diluir 1-2 gotas en una cucharadita de aceite base y frotar sobre el pecho y la espalda.',
        'Difunde mientras estudia para mantener la concentración.',
        'Uso tópico: Aplique 1-2 gotas en el área deseada. Diluya con un aceite portador para minimizar la sensibilidad de la piel.',
        'Acné y problemas de la piel: Puede agregarse al jabón líquido de uso diario. Se sugiere lavar el rostro al menos dos veces al día.',
        'Caída y caspa del cabello: 1-2 gotas en una cucharada de aceite (2 veces por semana). Masajear suavemente y lavar con champú. Puede agregarse al champú de uso diario.'
      ],
      frequent_questions: [
        {
          question: '¿QUÉ ES UN ACEITE ESENCIAL?',
          answer:
            'Los aceites esenciales son compuestos aromáticos volátiles, de origen natural, que se extraen de las plantas aromáticas mediante destilación por corriente de vapor de agua o por la presión o estrujamiento de la cáscara de las frutas cítricas. Cada aceite esencial tiene un perfil molecular distintivo que les da aromas y propiedades específicos. Los aceites esenciales han sido utilizados por personas durante miles de años para todo, desde fines cosméticos y alimentarios, hasta usos espirituales y religiosos. Creemos que los aceites esenciales son los mejores destilados de la naturaleza con propiedades terapéuticas únicas.'
        },
        {
          question: '¿PUEDO USAR ACEITES ESENCIALES DURANTE EL EMBARAZO?',
          answer:
            'Los aceites esenciales pueden ser útiles para mantener equilibradas las emociones de las embarazadas y promover su bienestar en esta etapa tan especial. Para la mayoría de las mujeres, varios aceites esenciales son una opción apropiada y segura durante la gestación, pero cada embarazo es diferente por lo que es necesario consultar con el médico de confianza antes de usarlos. Algunos aceites esenciales están totalmente prohibidos durante el embarazo porque se conocen los efectos neurotóxicos y abortivos, tales como salvia, alcanfor, orégano, cedro, hierba luisa, citronela, toronjil, cedrón, romero, perejil, enebro, menta poleo, artemisa, ravintsara, canela, clavo, nuez moscada.'
        },
        {
          question: '¿LOS ACEITES ESENCIALES SON SEGUROS PARA NIÑOS?',
          answer:
            'Algunos aceites esenciales son seguros para los niños y otros no. Los críticos, lavanda, la manzanilla y el incienso son los más seguros para niños. Usar solo 1 gota por cada 30 ml de aceite base en niños menores de 2 años y 1 gota por cada 10 ml de aceite base en niños de 2 a 6 años. No usar en bebés menores de 3 meses.  Cada niño es diferente, por lo que es importante probar el aceite esencial en un área pequeña del cuerpo y verificar que no se produzca reacción alérgica, antes de aplicarlo en zonas extensas de la piel. Igualmente, cuando se difunden aceites esenciales alrededor de los bebés, lo recomendable es probar con poca cantidad primero y aumentarla paulatinamente.'
        },
        {
          question: '¿LOS ACEITES ESENCIALES SON IGUALES A LAS FRAGANCIAS?',
          answer:
            'No, no lo son. Los aceites esenciales se extraen de las plantas aromáticas. Las fragancias se crean en un laboratorio por un especialista en química, que formula un aroma artificial con ingredientes sintéticos para que huela idéntico a algún elemento de la naturaleza. ¿Alguna vez has tenido una vela que huele a pastel de manzana? Seguro fue elaborada con una fragancia artificial.'
        }
      ],
      price: 110,
      title: 'ACEITE ESENCIAL DE ROMERO',
      slug: 'aceite-esencial-de-romero'
    },
    {
      description:
        'Nuestro jabón natural saponificado, elaborado con aceite de semilla de uva de altura (primero en su clase en Bolivia), aceite de coco, manteca de copoazú, aceite de oliva, extractos de té verde y plantas medicinales, ofrece propiedades antienvejecimiento, hidratantes, antioxidantes, purificantes y reafirmantes. Ideal para el cuidado diario del rostro, este producto único proporciona una experiencia completa para mantener tu piel radiante y saludable.',
      images: ['jabon-de-aceite-de-semilla-de-uva-de-altura.jpg'],
      benefits: [
        'Gracias a sus ingredientes, como el aceite de semilla de uva de altura y extractos de té verde, el jabón ayuda a combatir los signos del envejecimiento, como líneas finas y arrugas.',
        'Los aceites de coco, semilla de uva de altura y oliva presentes en la fórmula proporcionan una hidratación profunda, dejando la piel suave y flexible.',
        'Los antioxidantes presentes en los ingredientes, como los flavonoides y otros compuestos de plantas medicinales, ayudan a proteger la piel contra los radicales libres y el daño ambiental.',
        'Las propiedades purificantes de la manteca de copoazú y las arcillas presentes en el jabón contribuyen a limpiar la piel, eliminando impurezas y toxinas.',
        'La combinación de ingredientes, incluyendo la manteca de copoazú, puede ayudar a mejorar la elasticidad de la piel, contribuyendo a una apariencia más firme.'
      ],
      usage: [
        'Humedecer la piel: Antes de aplicar el jabón, asegúrate de mojar bien la piel con agua tibia. Esto ayuda a abrir los poros y permite una limpieza más efectiva.',
        'Aplicar el jabón: Frota suavemente el jabón entre las manos para crear espuma. Luego, aplica la espuma sobre la piel, ya sea directamente o utilizando una esponja suave. Presta especial atención a las áreas que desees tratar, como el rostro.',
        'Masajear: Con movimientos circulares y suaves, masajea el jabón sobre la piel. Esto no solo ayuda en la limpieza, sino que también puede mejorar la circulación sanguínea.',
        'Enjuagar: Después de masajear el jabón, enjuaga bien con agua tibia. Asegúrate de retirar completamente el jabón para evitar residuos.',
        'Secar suavemente: Después del enjuague, seca la piel con palmaditas suaves utilizando una toalla limpia. Evita frotar vigorosamente, especialmente si estás usando el jabón en el rostro.',
        'Aplicar productos adicionales (opcional): Dependiendo de tu rutina de cuidado de la piel, puedes aplicar otros productos, como humectantes o sérum, después de usar el jabón.'
      ],
      frequent_questions: [
        {
          question:
            '¿CUÁL ES LA DIFERENCIA ENTRE UN JABÓN SAPONIFICADO Y UN JABÓN DE USO COMÚN CON GLICERINA SINTÉTICA?',
          answer:
            'La distinción entre un jabón saponificado y un aceite con glicerina, particularmente si la glicerina es derivada del petróleo, reside en sus orígenes y procesos de producción. El jabón saponificado implica la saponificación de grasas o aceites mediante un proceso químico que utiliza hidróxido de sodio, generando un producto que, aunque químicamente transformado, suele tener como base ingredientes naturales como aceites vegetales. Por otro lado, la glicerina derivada del petróleo es producida sintéticamente. La apreciación de "totalmente natural" puede depender de la preferencia individual por ingredientes derivados de fuentes naturales en lugar de sintéticas. En última instancia, la elección entre ambos productos podría basarse en las preferencias del consumidor en cuanto a la naturaleza de los ingredientes utilizados.'
        }
      ],
      price: 22,
      net_weight: 53,
      title: 'JABÓN DE ACEITE DE SEMILLA DE UVA DE ALTURA',
      slug: 'jabon-de-aceite-de-semilla-de-uva-de-altura'
    }
  ]
};
