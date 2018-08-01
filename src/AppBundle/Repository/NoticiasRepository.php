<?php
// src/AppBundle/Repository/TareaRepository.php
namespace AppBundle\Repository;

use Doctrine\ORM\EntityRepository;

class noticiasRepository extends EntityRepository
{
    public function findAllOrderedByFechaHora()
    {
        $entitiManager = $this->getEntityManager();

        $query = $entitiManager->createQuery(
                'SELECT n FROM AppBundle:Noticia n'
            );
        return $query->getResult();
    }
}