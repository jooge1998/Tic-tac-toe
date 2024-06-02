export function openModal(id) {
    const modal = document.getElementById(id);
  
    modal?.classList.toggle('hidden');
    modal?.classList.toggle('flex')
  }
  
  
  export function closedModal(id) {
    const modal = document.getElementById(id);
  
    modal?.classList.add('hidden');
    modal?.classList.remove('flex')
  
  }
  
  