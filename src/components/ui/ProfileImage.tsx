import Image from "next/image";
import { PROFILE } from "@/lib/constants";

// Si PROFILE.photo está vacío muestra un espacio reservado; si tiene ruta, muestra tu foto.
export default function ProfileImage() {
  return (
    <div className="card-pop relative h-64 w-64 shrink-0 overflow-hidden sm:h-80 sm:w-80">
      {PROFILE.photo ? (
        <Image
          src={PROFILE.photo}
          alt={`Foto de ${PROFILE.name}`}
          width={320}
          height={320}
          className="h-full w-full object-cover"
          priority
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-surface2 p-6 text-center">
          <span className="text-5xl" aria-hidden="true">
            📷
          </span>
          <span className="text-sm font-bold text-muted">
            Aquí va tu foto
            <br />
            (public/foto.jpg)
          </span>
        </div>
      )}
    </div>
  );
}
