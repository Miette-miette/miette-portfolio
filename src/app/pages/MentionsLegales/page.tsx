import React from 'react'

export default function LegalNotice() {
   
  return (
    <main className='text-[#B36E7B]'>
        
        <section className="bg-[url(../../public/media/backgrounds/head-pink.svg)] bg-bottom bg-no-repeat bg-cover text-amber-50">
            <h1 className="flex justify-center p-20 md:p-25 text-3xl md:text-4xl text-center">Mentions Légales</h1>   
        </section>
        
        <section className='p-5 md:pr-80 md:pl-80 mb-50'>
            <h2 className='text-xl pb-2'>Propriétaire du site</h2>
            <p>Doriane Le Guyader</p>
            <p>leguyader.doriane@gmail.com</p>

            <h2 className='text-xl pb-2 pt-8'>Publication</h2>
            <p><strong> Responsable de la publication :</strong> Doriane Le Guyader</p>
            <p><strong> Relecture et correction : </strong> Maëlle Bramoullé Correction</p>

            <h2 className='text-xl pb-2 pt-8'>Hébergeur du site</h2>
            <p>IONOS</p>
            <p>7 place de la Gare, 57200 Sarreguemines, France</p>
            <a href='https://www.ionos.fr'>https://www.ionos.fr</a>

            <h2 className='text-xl pb-2 pt-8'>Propriété intellectuelle</h2>
            <p>Tous les contenus présents sur ce site (textes, images, illustrations, logos, etc.) sont la propriété exclusive de Doriane Le Guyader, sauf mention contraire. Toute reproduction, modification ou diffusion sans autorisation est interdite.
            </p>

            <h2 className='text-xl pb-2 pt-8'>Responsabilité</h2>
            <p>Les informations présentées sur ce site sont fournies à titre indicatif. Doriane Le Guyader ne saurait être tenu responsable en cas d&#39;erreurs ou d&#39;omissions.
            </p>

            <h2 className='text-xl pb-2 pt-8'>Données personnelles</h2>
            <p>Ce site ne collecte aucune donnée personnelle. Pour toute question, vous pouvez contacter leguyader.doriane@gmail.com.</p>
        </section>
        
    </main>

  )
}
