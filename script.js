// MILESTONE0
// Dati del team 
// ogni membro e un oggetto con tre caratteristiche diverse
const teamMembers = [
    {
      nome: 'Wayne Barnett',
      ruolo: 'Founder & CEO',
      foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
      nome: 'Angela Caroll',
      ruolo: 'Chief Editor',
      foto: 'angela-caroll-chief-editor.jpg'
    },
    {
      nome: 'Walter Gordon',
      ruolo: 'Office Manager',
      foto: 'walter-gordon-office-manager.jpg'
    },
    {
      nome: 'Angela Lopez',
      ruolo: 'Social Media Manager',
      foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
      nome: 'Scott Estrada',
      ruolo: 'Developer',
      foto: 'scott-estrada-developer.jpg'
    },
    {
      nome: 'Barbara Ramos',
      ruolo: 'Graphic Designer',
      foto: 'barbara-ramos-graphic-designer.jpg'
    }
];

// Milestone 1: Stampare su console le informazioni per ogni membro del team
teamMembers.forEach(member => {
    console.log(`Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`);
  });

// Milestone 2: Stampare le stesse informazioni su DOM sotto forma di stringhe
const teamListElement = document.getElementById('team-list');

// Itera attraverso ogni membro del team
teamMembers.forEach(member => {
    // Crea un nuovo elemento paragrafo per ogni membro del team
    const memberInfo = document.createElement('p');
  
    // Assegna al testo del paragrafo le informazioni del membro attuale
    memberInfo.textContent = `Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`;
  
    // Aggiungi il paragrafo al div con id 'team-list' nel tuo HTML
    teamListElement.appendChild(memberInfo);
    // Nota: Assicurati che nel tuo HTML esista un elemento con id 'team-list' dove verranno aggiunti i paragrafi
  });
  