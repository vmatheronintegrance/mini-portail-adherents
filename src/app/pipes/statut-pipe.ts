import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statut',
})
export class StatutPipe implements PipeTransform {

  transform(value: string | undefined): string {
    const labels: Record<string, string> = {
      actif: "✅ Actif",
      inactif: "❌ Inactif",
      en_attente: "⏳ En attente"
    }

    if (value) {
      return labels[value] ?? "Inconnu";
    } else {
      return "Non défini";
    }
     
  }
}
