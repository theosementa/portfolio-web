export const HeaderWithBio = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-32 items-center font-sans text-white">
      <div className="order-2 md:order-1 space-y-8">
        <div className="text-6xl font-bold space-y-2">
          <p>Hi, I am</p>
          <p className="text-blue-600">Théo Sementa</p>
        </div>
        <p className="text-4xl font-semibold">iOS Developer</p>
        <p className="text-2xl font-medium">
          Je suis développeur iOS depuis + de 3 ans avec une passion pour le développement mobile et un grand intérêt
          sur la partie interface utilisateur et expérience utilisateur. Je suis capable de travailler sur une application mobile de A à Z en Swift et SwiftUI
          mais aussi de développer des projets front-end avec React ou back-end avec NestJS. Actuellement je m'intéresse également à Kotlin Multiplatform et Jetpack Compose.
        </p>
      </div>

      <div className="order-1 md:order-2 flex-shrink-0 mb-8 md:mb-0">
        <img
          src="/assets/images/theosementa.jpg"
          alt="theo's img"
          className="rounded-full border-4 border-blue-600 shadow-lg w-64 h-64 md:w-96 md:h-96"
        />
      </div>
    </div>
  )
}