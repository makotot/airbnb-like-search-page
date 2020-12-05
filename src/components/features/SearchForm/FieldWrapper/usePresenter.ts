import { usePrevious } from "@chakra-ui/react";
import { useEffect } from "react";

export const usePresenter = ({ isVisible }: { isVisible: boolean }) => {
  const isVisiblePrev = usePrevious(isVisible);

  useEffect(() => {
    if (isVisible && !isVisiblePrev) {
      document.body.style.overflow = "hidden";
    }
    if (!isVisible && isVisiblePrev) {
      document.body.style.overflow = "auto";
    }
  }, [isVisible]);
};
