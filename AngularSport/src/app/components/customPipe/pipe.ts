import { Pipe, PipeTransform } from "@angular/core";
import { ExerciceEtape } from "src/app/classes/exerciceEtape";

@Pipe({ name: "bodyPart" })
export class etapesCountPipe implements PipeTransform {
    transform(value: ExerciceEtape[] | undefined): string {

        if (value == undefined)
            return "il y a 0 étapes por cet exercice";
        else
            return "il y a " + value.length + " étapes pour cet exercice"
    }
}
