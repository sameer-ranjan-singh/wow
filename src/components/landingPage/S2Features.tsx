import { useContext } from 'react'
import { ThemeContext } from './theme/ThemeProvider';
import { data } from './data';
import { FeatureCard } from './FeatureCard';
const S2Features = () => {
    const { themeStyle } = useContext(ThemeContext);
      const features = data?.section2;
    
  return (
    <section
    id="features"
    className={`w-full pt-10 ${themeStyle.features.bgGradient} ${themeStyle.features.title}`}
  >
    <div className="min-h-screen flex flex-col justify-center items-center py-10 mx-2 gap-10">
      <div className="">
        <h1 className="text-2xl md:text-4xl font-semibold mb-5 text-center font-serif">
          {features.title}
        </h1>
        <p
          className={`text-sm md:text-lg ${themeStyle.features.description} text-center font-sans mx-5`}
        >
          # {features.description}
        </p>
      </div>
      <div className="flex flex-wrap md:w-4/6 justify-center gap-6">
        {features.cards.map((eachCard) => (
          <FeatureCard card={eachCard} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default S2Features